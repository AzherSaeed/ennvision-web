import React from "react";
import { DatePicker, Form } from "antd";
import { Field, ErrorMessage } from "formik";
import { CustomDatePickerContainer } from "./style";
import ErrorMsg from '../ErrorMessage';
import moment from 'moment'

const Index = (props) => {
  const { name, placeholder, label, options, title, ...rest } = props;



  return (
    <CustomDatePickerContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }) => {
          return (
            // <Form.Item name={name}>
              <div className="custom-select-inner">
                <DatePicker
                  className="customdatepicker"
                  name={name}
                  id={name}
                  {...rest}
                  onChange={(val) => {
                    form.setFieldValue(name, moment(val._d).format('YYYY/MM/DD'));
                  }}
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
