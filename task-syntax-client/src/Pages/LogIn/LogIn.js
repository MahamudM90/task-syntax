import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    setSignUpError("");

    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You have been logged in");
        setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setSignUpError(error.message);
      });

    // reset form data after submit
    document.getElementById("login-form").reset();
  };

  return (
    <div className="lg:px-56 bg-base-200 pb-20">
      <h1 className="text-3xl text-center font-bold py-10">Login</h1>

      <div className="flex justify-center">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          id="login-form"
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
              <button className="btn btn-primary">LogIn</button>
            </div>

            <div className="form-control">
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500">
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

export default LogIn;
