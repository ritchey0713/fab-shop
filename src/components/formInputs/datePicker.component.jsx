import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, useField } from "formik";

const CustomDatePicker = ({ label, name, ...props }) => {
  const [, meta] = useField(name);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...props}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <div>
        {meta.touched && meta.error ? (
          <span>{meta.error.dateNeeded}</span>
        ) : null}
      </div>
    </>
  );
};

export default CustomDatePicker;
