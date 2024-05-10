import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import lgImg from "../assets/images/login/login.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  //   const location = useLocation();
  //   const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // signIn(email, password)
    //   .then((result) => {
    //     toast.success("User login successfully");
    //     if (result.user) {
    //       navigate(location?.state || "/");
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error(error.message.split("/")[1].split(")")[0]);
    //   });
    //   };

    //handle googleLogin
    //   const handleGoogleSignIn = () => {
    //     googleLogin().then(() => {
    //       toast.success("User login successfully");
    //       navigate(location?.state || "/");
    //     });
    //   };

    //   //handle githubSignIn
    //   const handleGithubSignIn = () => {
    //     githubLogin().then(() => {
    //       toast.success("User login successfully");
    //       navigate(location?.state || "/");
    //     });
  };

  return (
    <div className="hero my-4">
      <div className="hero-content lg:gap-20 flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={lgImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">Login</h2>
            <form onSubmit={handleLogin}>
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
                    type={showPassword ? "text" : "password"}
                    name="password"
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
                value="Login"
              />
            </form>
            <div>
              <p className="text-lg">
                Have an account?{" "}
                <Link className="font-semibold text-primary" to={"/signup"}>
                  Sign In
                </Link>
              </p>
            </div>
            <div className="divider">Continue With</div>
            <div className="flex justify-center gap-4">
              <button
                // onClick={handleGoogleSignIn}
                className="btn btn-outline btn-accent"
              >
                Google{" "}
              </button>
              <button
                // onClick={handleGithubSignIn}
                className="btn btn-outline btn-secondary"
              >
                Github{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
