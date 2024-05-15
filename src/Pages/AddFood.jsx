import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const Quantity = form.quantity.value;
    const quantity = parseInt(Quantity);
    const notes = form.notes.value;
    const location = form.location.value;
    const expired_date = startDate;
    const photo = form.photo.value;
    const status = form.status.value;

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
    console.log(foodData);

    try {
      await axiosSecure.post(`/food`, foodData);
      Swal.fire({
        title: "Success!",
        text: "Add Food Successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } catch (err) {
      toast.error(err.message)
    }
  };

  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
       
       <Helmet>
          <title>YumHub | Add Food</title>
       </Helmet>

      <h2 className="text-3xl mb-8 text-center font-semibold">Add Food</h2>
      <form onSubmit={handleAddFood}>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="food_name"
              placeholder="food_name"
              required
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
              placeholder="quantity"
              required
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
              placeholder="notes"
              required
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
              required
              placeholder="Pickup Location"
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
              placeholder="Food Image"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Status</span>
            </label>
            <input
              type="text"
              name="status"
              defaultValue={"Available"}
              value={"available"}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Food"
          className="btn text-white btn-block bg-red-500"
        />
      </form>
    </div>
  );
};

export default AddFood;
