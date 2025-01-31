import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(authContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get Form Data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 3) {
      setError({ ...error, name: "Name must be more than 3 characters or long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // console.log({name, photo, email, password});

    createNewUser(email, password) 
      .then(result => {
        const user = result.user;
        setUser(user);
        updateUserProfile({displayName: name, photoURL: photo})
          .then(() => {
            navigate("/");
          })
          .catch((err => {
            // console.log(err);
          }))
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      })
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none px-[53px] py-[56px]">
        <h2 className="text-2xl font-semibold text-[#403F3F] text-center pb-8 border-b-2">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-base font-semibold text-rose-600">
              {error.name}
            </label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold text-[#706F6F]">
          Already Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-red-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;