import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
  const foodDetails = useLoaderData();
  const [visible, setVisible] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const navigate=useNavigate()

  const {
    _id,
    food_name,
    quantity,
    notes,
    location,
    expired_date,
    photo,
    status,
    donar,
  } = foodDetails;

  const handleRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const notes = form.notes.value;
    const email = user?.email;
    const status = "Requested";
    const requested_date= startDate;

    const requestData = {
      _id,
      food_name,
      notes,
      location,
      expired_date,
      requested_date,
      photo,
      status,
      email,
      donar,
    };
    console.log(requestData);

    try {
      const { data1 } = await axiosSecure.post(`/Req-Food`, requestData);
      
      const { data2 } = await axiosSecure.patch(`/food/${_id}`, { status });
      Swal.fire({
        title: "Success!",
        text: "Food Request Successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate(`/`)
    } catch (err) {
      console.log("Hi, i am error", err.message);
      toast.error(err.message)
      e.target.reset();
    }
  };

  return (
    <div>

      <Helmet>
          <title>YumHub | Food Details</title>
      </Helmet>

      <div className="lg:flex justify-center items-center gap-8 my-4 lg:my-10">
        <div className="flex justify-center items-center rounded-2xl lg:w-[50%]">
          <img className="rounded-2xl lg:h-[450px]" src={photo} alt="" />
        </div>
        <div className="space-y-4 lg:w-[50%]">
          <h1 className="text-2xl lg:text-4xl font-semibold">{food_name}</h1>
          <p className="text-xl">Status : {status}</p>
          <p className="border-t-2 border-gray-300"></p>
          <p>
            <span className="font-semibold">Additional Notes : {notes}</span>
          </p>
          <p className="border-t-2 border-gray-300"></p>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="w-[30%]">Quantity: </span>
              <span className="font-semibold">{quantity}</span>
            </p>
            <p className="flex items-center">
              <span className="w-[30%]">Expire Date: </span>
              <span className="font-semibold">{new Date(expired_date).toLocaleDateString()}</span>
            </p>
            <p className="flex items-center">
              <span className="w-[30%]">location: </span>
              <span className="font-semibold">{location}</span>
            </p>
          </div>
          <p className="border-t-2 border-gray-300"></p>
          <div className="flex justify-between items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={donar.photo} />
              </div>
            </div>
            <div>
              <p>Donar Name: {donar.name}</p>
              <p>Donar Email: {donar.email}</p>
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn px-6 text-white btn-outline bg-red-500"
              onClick={() => setVisible(true)}
            >
              Request
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{ overlay: { background: "gray" } }}
      >
        <div className="p-2 md:p-6">
          <h2 className="text-3xl mb-6 text-center font-semibold">
            Food Request
          </h2>
          <form onSubmit={handleRequest}>
            <div className="md:flex gap-4 mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={food_name}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  type="text"
                  defaultValue={photo}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
            </div>
            <div className="md:flex gap-4 mb-4">
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Donator Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={donar.name}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Donar Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={donar.email}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Food Id</span>
                </label>
                <input
                  type="text"
                  defaultValue={_id}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
            </div>
            <div className="md:flex gap-4 mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Additional notes</span>
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="Additional notes"
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="md:flex gap-4 mb-4">
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Expired Date</span>
                </label>
                <input
                  type="text"
                  name="expired_date"
                  defaultValue={new Date(expired_date).toLocaleDateString()}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Requested Date</span>
                </label>
                <DatePicker
                  className="border p-3 w-full rounded-md"
                  selected={startDate}
                  disabled
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            {/* button */}
            <div className="flex gap-4 justify-center">
              <input
                type="submit"
                value="Request"
                className=" btn text-white btn-outline bg-red-500"
              />
              <button
                className="btn text-white btn-outline px-7 bg-red-500"
                onClick={() => setVisible(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FoodDetails;
