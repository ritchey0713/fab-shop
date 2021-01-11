import { useField } from "formik";

const CustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={label}>{label}</label>
      {props.type === "textarea" ? (
        <textarea {...field} {...props} />
      ) : (
        <input {...field} {...props} />
      )}
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </>
  );
};

export default CustomTextField;
