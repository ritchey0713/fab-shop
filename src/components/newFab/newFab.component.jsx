import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import CustomCheckbox from "../formInputs/checkBox.component";
import CustomSelect from "../formInputs/customSelect.component";
import CustomTextField from "../formInputs/textField.component";
import CustomDatePicker from "../formInputs/datePicker.component";
import { connect } from "react-redux";
import { createRequest } from "../../redux/fab/fab.actions";
import { useHistory } from "react-router-dom";

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
  useage: yup.string().required("Required"),
  material: yup
    .string()
    .oneOf(
      ["aluminum", "mild steel", "other", "stainless steel"],
      "Must select a material"
    )
    .required("required"),
  units: yup
    .number()
    .min(1, "must make at least one!")
    .max(20, "please email us to order")
    .required("Required"),
});

const NewFabForm = ({ createRequest }) => {
  const history = useHistory();
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
          createRequest(values);
          history.push("/dashboard");
        }}
      >
        {() => {
          return (
            <Form>
              <h2>Add new fab survey</h2>
              <div>
                <CustomTextField
                  label="Title"
                  name="title"
                  type="text"
                  placeholder="Fab item name"
                />
              </div>

              <div>
                <CustomDatePicker
                  label="Date needed by"
                  name="dateNeeded"
                  type="date"
                />
              </div>

              <div>
                <CustomTextField
                  label="Price willing to pay"
                  name="price"
                  type="number"
                />
              </div>

              <div>
                <CustomTextField
                  label="Part Purpose"
                  name="useage"
                  placeholder="The part is for..."
                />
              </div>

              <div>
                <CustomSelect name="material">
                  <option value="">Please select a material</option>
                  <option value="aluminum">aluminum</option>
                  <option value="mild steel">mild steel</option>
                  <option value="stainless steel">stainless steel</option>
                  <option value="other">other</option>
                </CustomSelect>
              </div>

              <div>
                <CustomCheckbox name="isStructural">
                  Is this a structural piece?
                </CustomCheckbox>
              </div>

              <div>
                <CustomTextField
                  label="Units needed"
                  name="units"
                  type="number"
                />
              </div>

              <div>
                <CustomTextField
                  label="Special Notes"
                  name="notes"
                  type="textarea"
                  className="materialize-textarea"
                />
              </div>

              <button type="submit">Send Fab Ticket</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default connect(null, { createRequest })(NewFabForm);
