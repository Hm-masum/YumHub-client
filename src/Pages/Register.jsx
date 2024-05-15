import { Link, useNavigate } from "react-router-dom";
import lgImg from "../assets/images/login/login.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, setUser } =useAuth()
  const navigate = useNavigate()
  const axiosSecure=useAxiosSecure()

  const handleRegister = async(e) => {
    e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      //console.log(name,photo,email,password)

      try {
        const result = await createUser(email, password)
        toast.success('User created successfully')
        await updateUserProfile(name, photo)
        setUser({ ...result?.user, photoURL: photo, displayName: name })
        // jwt
        const {data}= await axiosSecure.post(`/jwt`,{email:result?.user?.email})
        //console.log(data)
        navigate('/')
      } 
      catch (err) {
        //console.log(err)
        toast.error(err.message.split("/")[1].split(")")[0])
      }

  };
  return (
    <div className="hero my-4">

        <Helmet>
          <title>YumHub | Register</title>
       </Helmet>

      <div className="hero-content lg:gap-20 flex-col lg:flex-row-reverse">
        <div className="md:w-1/2">
          <img src={lgImg} alt="" />
        </div>
        <div className="card md:w-1/2 lg:shadow-2xl bg-base-100">
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
                className="btn btn-outline bg-red-500 text-white w-full"
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
