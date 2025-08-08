export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // stop page reload
    const formData = new FormData(event.target); // grab all inputs
    const formInputData = Object.fromEntries(formData.entries()); // convert to object
    console.log(formInputData); // log values
  };

  return (
    <section className="section-contact">
      <h1 className="container-title">Contact Us</h1>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name"
            name="username"
            required
            autoComplete="off"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
