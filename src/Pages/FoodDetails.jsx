import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "react-modal";
import useAuth from "../hook/useAuth";

const FoodDetails = () => {
  const foodDetails = useLoaderData();
  const [visible, setVisible] = useState(false);
  const { user } = useAuth();
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

    const requestData = {
      _id,
      food_name,
      notes,
      location,
      expired_date,
      photo,
      status,
      donar,
    };
    console.log(requestData)
  };

  return (
    <div>
      <img src={photo} alt="" />
      <button className="btn" onClick={() => setVisible(true)}>
        Request
      </button>

      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{ overlay: { background: "" } }}
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
                  defaultValue={expired_date}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Requested Date</span>
                </label>
                <input
                  type="text"
                  name="expired_date"
                  placeholder="Requested Date"
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
            </div>
            {/* button */}
            <div className="flex gap-4">
              <input
                type="submit"
                value="Request"
                className=" btn w-1/2 text-white bg-accent"
              />
              <button
                className="btn w-1/2 text-white bg-accent"
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
