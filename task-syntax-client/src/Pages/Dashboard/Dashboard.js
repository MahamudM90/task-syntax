import React from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Dashboard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);


        fetch("http://localhost:5000/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    toast.success("Blog Upload Successfully");
                }
                navigate('/', {replace: true});
            });

        //clear the form after submit
        document.getElementById("upload-form").reset();
    }
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center pb-5">Upload a Post</h1>

      <div className="flex justify-center items-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleSubmit(onSubmit)}
          id="upload-form" className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL Upload</span>
              </label>
              <input
                type="text"
                {...register("photo", {
                    required: "**Photo URL is Required",
                })}
                placeholder="Photo URL Link"
                className="input input-bordered"
              />
                {errors.photo && (
                <p className="text-red-700 mt-2">{errors.photo?.message}</p>
                )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Label Upload</span>
              </label>
              <input
                type="text"
                placeholder="Label"
                {...register("label", {
                    required: "**Label is Required",
                })}
                className="input input-bordered"
              />
                {errors.label && (
                <p className="text-red-700 mt-2">{errors.label?.message}</p>
                )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Paragraph Upload</span>
              </label>
              <textarea
                type="text"
                placeholder="Paragraph"
                {...register("paragraph", {
                    required: "**Paragraph is Required",
                })}
                className="textarea textarea-bordered"
              />
                {errors.paragraph && (
                <p className="text-red-700 mt-2">{errors.paragraph?.message}</p>
                )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Upload Submits</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
