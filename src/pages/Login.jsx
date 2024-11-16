import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";


const Login = () => {
    const { loginUser, setUser } = useContext(authContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      // console.log({ email, password });

      loginUser(email, password) 
        .then(result => {
          const user = result.user;
          setUser(user);
          navigate(location?.state ? location.state : "/");
        })
        .catch(err => {
          setError({...error, login:err.code});
        })
    }

    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none px-[53px] py-[56px]">
          <h2 className="text-2xl font-semibold text-[#403F3F] text-center pb-8 border-b-2">
            Login your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
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
            {error.login && (
              <label className="label text-base font-semibold text-red-600">
                {error.login}               
              </label>
            )}
            <div className="form-control">
              <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-semibold text-[#706F6F]">
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-red-500 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;