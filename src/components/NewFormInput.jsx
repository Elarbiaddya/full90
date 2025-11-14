const NewFormInput = ({ label, id, error, className, required = false, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} required={required} className={className} {...props} />
      {error && <p className="error">{error}</p>}
      <p>Cambio hecho en la rama de ivan</p>
      <p>Cambio hecho en main</p>
    </div>
  );
};

export default NewFormInput;