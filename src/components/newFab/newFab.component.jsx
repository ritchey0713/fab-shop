import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// title
//date needed
// price willing to pay
// application use
// material
// is it structural
// units needed

let fabSchema = yup.object().shape({
  title: yup.string().max(255, "Too long!").required("Required"),
  dateNeeded: yup.date().required("Required"),
  useage: yup.string.required("Required"),
  material: yup.string().max(50, "Too long!").required("Required"),
});
