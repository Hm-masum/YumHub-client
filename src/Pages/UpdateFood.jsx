import axios from "axios";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";

const UpdateFood = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const food = useLoaderData();
  const axiosSecure=useAxiosSecure()

  const {
    _id,
    food_name,
    quantity,
    notes,
    location,
    expired_date,
    photo,
    status,
  } = food;

  const [startDate, setStartDate] = useState(
    new Date(expired_date) || new Date()
  );

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const Quantity = form.quantity.value;
    const quantity = parseInt(Quantity);
    const notes = form.notes.value;
    const location = form.location.value;
    const expired_date = startDate;
    const photo = form.photo.value;
    const foodData = {
      food_name,
      quantity,
      notes,
      location,
      expired_date,
      photo,
      status,
      donar: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
    };

    try {
      const { data } = await axiosSecure.put(`/update-food/${_id}`, foodData);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Food Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      navigate("/manage-myFood");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">Update Food</h2>
      <form onSubmit={handleUpdateFood}>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="food_name"
              defaultValue={food_name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Additional Notes</span>
            </label>
            <input
              type="text"
              name="notes"
              defaultValue={notes}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Expired Date</span>
            </label>
            <DatePicker
              className="border p-3 w-full rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Status</span>
            </label>
            <input
              type="text"
              defaultValue={status}
              value={status}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Food"
          className="btn btn-block btn-outline text-white bg-red-500"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
