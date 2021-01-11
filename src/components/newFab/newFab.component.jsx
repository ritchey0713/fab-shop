import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// title
//date needed
// price willing to pay
// application use
// material
// is it structural
// units needed
// special notes

let fabSchema = yup.object().shape({
  title: yup.string().max(255, "Too long!").required("Required"),
  dateNeeded: yup.date().required("Required"),
  useage: yup.string.required("Required"),
  material: yup.string().max(50, "Too long!").required("Required"),
  isStructural: yup.boolean().required("Required"),
  units: yup.number().required("Required"),
});

const NewFabForm = () => {
  const initialValues = {
    title: "",
    dateNeeded: "",
    price: 0,
    useage: "",
    material: "",
    isStructural: false,
    units: 0,
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={fabSchema}
        onSubmit={(values, actions) => {
          console.log("VALUES:", values);
          console.log("ACTIONS:", actions);
        }}
      >
        <Form>
          <h2>Add new fab survey</h2>
          <div>
            <label htmlFor="title">Title</label>
            <Field />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
