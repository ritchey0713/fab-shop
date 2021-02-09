const emailTemplate = ({ label, input }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default emailTemplate;
