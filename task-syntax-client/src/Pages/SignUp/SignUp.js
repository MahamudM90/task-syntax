import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link, useNavigate  } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';



const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
  
    if(token){
      navigate('/');
    }
  
    const onSubmit = (data) => {
      console.log(data);
      setSignUpError("");
  
      createUser(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast("Your account has been created");
          const userInfo = {
            displayName: data.name
          }
          updateUser(userInfo)
              .then(() => {
                  saveUser(data.name, data.email, data.role);
              })
              .catch(err => console.log(err));
        })
        .catch((error) => {
          toast(error.message);
          setSignUpError(error.message)
        });
  
      // reset form data after submit
      document.getElementById("signup-form").reset();
    };
  
    const saveUser = (name, email, role) => {
      const user ={name, email, role};
      fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
          setCreatedUserEmail(email);
      })

  };
  return (
    <div className="lg:px-56 bg-base-200 pb-20">
      <h1 className="text-3xl text-center font-bold py-10">SignUp</h1>

      <div className="flex justify-center">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          id="signup-form"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "**Email is Required",
                  pattern: { value: /^\S+@\S+$/i, message: "**Invalid Email" },
                })}
                placeholder="Enter your email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-700 mt-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-700 mt-2">{errors.password?.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>

            <div className="form-control">
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
