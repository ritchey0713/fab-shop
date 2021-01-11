import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select className="browser-default" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default CustomSelect;
