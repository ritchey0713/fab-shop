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
  title: yup.string().max(255, "Too long!").required("REQUIRED"),
  body: yup.string().required("REQUIRED"),
  subject: yup.string().max(255, "Too long!").required("REQUIRED"),
  //recipients: yup.string().required("REQUIRED"),
});

// const addRecipeints = (recipientCount) => {
//   let i = 0;
//   while (i < recipientCount) {
//     <div>
//       <CustomTextField
//         label="recipients"
//         name="recipients"
//         type="text"
//         placeholder="recipient email"
//       />
//     </div>;
//   }
// };

const addRecipients = (recipientCount) => {
  let inputs = [];
  let i = 0;
  while (i < recipientCount) {
    inputs.push({
      label: "recipients",
      name: `recipients-${i}`,
      type: "text",
      placeholder: "recipient email",
    });
    i++;
  }
  return inputs;
};

const SurveyForm = () => {
  const history = useHistory();
  const [recipientCount, setRecipientCount] = useState(1);
  const [recipients, setRecipients] = useState([]);
  // const handleChange = (e) => {
  //   //setRecipient([...recipient, e.target.value]);
  //   //console.log(recipient);
  // };
  const initialValues = {
    title: "",
    body: "",
    subject: "",
    // recipients: "",
  };

  const saveRecipient = async (e) => {
    // setRecipients([...recipients, e.target.value]);
    setRecipients((recipients) => [...recipients, e.target.value]);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={surveySchema}
        onSubmit={(values, action) => {
          console.log("SUBMITTED");
          console.log("values: ", values);
          console.log("recips: ", recipients);
        }}
      >
        {() => {
          return (
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
                {addRecipients(recipientCount).map((input) => {
                  return (
                    <CustomTextField
                      key={input.name}
                      label={input.label}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={null}
                      onBlur={saveRecipient}
                    />
                  );
                })}

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
                <div>
                  <button type="submit">Send surveys!</button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default SurveyForm;
