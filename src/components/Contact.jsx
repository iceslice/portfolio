import { useState } from "react";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (!values.subject.trim()) errors.subject = "Enter a subject.";
  if (!values.message.trim()) errors.message = "Write a message.";
  return errors;
}

function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setIsSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Hook up an email service or API here later.
      setIsSent(true);
      setFormData(EMPTY_FORM);
    }
  };

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
  ];

  return (
    <section id="contact" className="section section--alt">
      <div className="container container--narrow">
        <h2 className="section__title">Contact</h2>
        <form className="form" onSubmit={handleSubmit} noValidate>
          {fields.map((field) => (
            <div className="form__group" key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={
                  errors[field.name] ? `${field.name}-error` : undefined
                }
              />
              {errors[field.name] && (
                <p className="form__error" id={`${field.name}-error`}>
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="form__error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn--primary">
            Send message
          </button>

          {isSent && (
            <p className="form__success" role="status">
              Message sent. Thank you, I will reply soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
