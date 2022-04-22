import React, { useState } from "react";
import { ImageSelectorContainer } from "./Style";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import ic_attach from "../../Assets/ic_attach.svg";

const { Dragger } = Upload;

const Index = ({ placeholder, label, ...props }) => {
  const { name, options, title, ...rest } = props;

  const [selectedImages, setselectedImages] = useState("Image.png");

  // const imageConfig = {
  //   name: { name },

  //   multiple: false,
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   onChange(info) {
  //     const { status } = info.file;
  //     if (status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === "done") {
  //       // message.success(`${info.file.name} file uploaded successfully.`);
  //       setselectedImages(info.file.name);
  //       form.setFieldValue(name, moment(val._d).format("YYYY/MM/DD"));
  //     } else if (status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },

  //   onDrop(e) {
  //     console.log("Dropped files", e.dataTransfer.files);
  //   },
  // };

  return (
    <ImageSelectorContainer>
      <label htmlFor={props.id || props.name}>{label}</label>

      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }) => {
          return (
            <Dragger
              name={name}
              id={name}
              {...rest}
              onChange={(val) => {
                form.setFieldValue(name, val.fileList);
              }}
            >
              <div className="image-upload-inner">
                <p className="image-upload-inner-name">{selectedImages}</p>
                <p className="image-upload-inner-icon">
                  <img src={ic_attach} alt="ic_attach" />
                </p>
              </div>
            </Dragger>
          );
        }}
      </Field>

      <ErrorMessage name={props.name} component={ErrorMsg} />
    </ImageSelectorContainer>
  );
};

export default Index;
