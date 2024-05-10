import { Link } from "react-router-dom";
import lgImg from "../assets/images/login/login.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      console.log(name,photo,email,password)

    //   if (password.length < 6) {
    //     toast.error("password should be 6 character")
    //     return;
    //   }
    //   else if (!/[A-Z]/.test(password)) {
    //     toast.error("Your password should have at least 1 Uppercase character")
    //     return;
    //   }
    //   else if (!/[a-z]/.test(password)) {
    //     toast.error("Your password should have at least 1 Lowercase character")
    //     return;
    //   }
  };
  return (
    <div className="hero my-4">
      <div className="hero-content lg:gap-20 flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <img src={lgImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    className="w-full input input-bordered"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                  />
                  <span
                    className="absolute top-4 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
              </div>
              <br />
              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Register"
              />
            </form>
            <div>
              <p className="my-3">
                Already have an account please{" "}
                <Link to={`/login`} className="text-blue-600 font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
