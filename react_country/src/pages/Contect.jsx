export const Contect = () => {
 const handlEFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = object.formEntries(formData.entries() );
    console.log(formInputData);
};

    return (
        <section className="section-contect">
            <h1 className="container-title">Contect Us</h1>
            <div className="contect-wrapper container ">

            <form action={handlEFormSubmit}>
                <input
                 type="text" 
                 className="form-control"
                 placeholder="Enter your Name"
                 name="username"
                 required autoComplete="false"
                 />
                   <input
                 type="email" 
                 className="form-control"
                 placeholder="Enter your email"
                 name="email"
                 required autoComplete="false"
                 />
                 <textarea
                  className="form-control"
                  rows="10"
                  placeholder="Enter your message"
                  name="message"
                  required autoComplete="false"
                ></textarea>
                <button type="submit" value="send">
                    Send
                    </button>
                

            </form>
            </div>
        </section>

    );
}