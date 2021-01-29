import { Formik, Form } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

// title: String,
// body: String,
// subject: String,
// //recipients: [String],
// // set up child objs using recipient schema
// recipients: [recipientSchema],
// _user: { type: Schema.Types.ObjectId, ref: "User" },
// yes: { type: Number, default: 0 },
// no: { type: Number, default: 0 },
// dateSent: Date,
// lastResponded: Date,

let surveySchema = yup.object().shape({
  title: yup.string().max(255, "Too long!").required,
  body: yup.string().required,
  subject: yup.string().max(255, "Too long!").required,
  recipients: yup.string().required,
});

const SurveyForm = () => {
  const history = useHistory();

  return (
    <div>
      <Formik></Formik>
    </div>
  );
};
