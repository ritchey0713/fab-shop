import { Formik, Form } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import CustomTextField from "../formInputs/textField.component";

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
  const [recipientCount, setRecipientCount] = useState(1);
  const initialValues = {
    title: "",
    body: "",
    subject: "",
    recipients: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={surveySchema}
        onSubmit={(values, action) => {
          console.log("SUBMITTED");
        }}
      >
        {() => (
          <div>
            <Form>
              <h2>Create an email survey!</h2>
              <div>
                <CustomTextField
                  label="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div>
                <CustomTextField
                  label="subject"
                  name="subject"
                  type="text"
                  placeholder="Email Subject"
                />
              </div>
              <div>
                <CustomTextField
                  label="body"
                  name="body"
                  type="text"
                  placeholder="Email Body"
                />
              </div>
              <div>
                <CustomTextField
                  label="recipients"
                  name="recipients"
                  type="text"
                  placeholder="recipient email"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setRecipientCount(recipientCount + 1);
                    console.log(recipientCount);
                  }}
                >
                  ADD RECIPIENT
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SurveyForm;
