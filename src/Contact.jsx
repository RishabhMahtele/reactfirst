import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (eve) => {
    eve.preventDefault()
    alert(
      `My name is ${data.fullname} my number is ${data.phone} and email is ${data.email}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
                <label for="exampleInputEmail1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your number"
                />
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your email"
                />
               
              </div>
              
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="col-12">
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
                <br />
                <br /><br /><br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
