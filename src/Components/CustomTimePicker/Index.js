import React from "react";
import { TimePicker } from "antd";
import { Field, ErrorMessage } from "formik";
import { CustomDatePickerContainer } from "./style";
import ErrorMsg from '../ErrorMessage';
import moment from 'moment'


const format = 'HH:mm';
const Index = (props) => {
  const { name, placeholder, defaultvalue ,  label, options, title, ...rest } = props;


  return (
    <CustomDatePickerContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }) => {
          return (
            // <Form.Item name={name}>
              <div className="custom-select-inner">
                <TimePicker
                  className="customdatepicker"
                  name={name}
                  id={name}
                  format={format}
                  {...rest}
                  onChange={(val) => {
                    form.setFieldValue(name, moment(val._d).format('LT'));
                  }}
                  defaultValue={defaultvalue ? moment(defaultvalue, 'HH:mm:ss') : '' } 
                />
              </div>
            // </Form.Item>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomDatePickerContainer>
  );
};

export default Index;
