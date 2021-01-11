import { useField } from "formik";

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        <span>{children}</span>
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default CustomCheckbox;
