import useAuth from "../hook/useAuth";


const AddFood = () => {
    const {user}=useAuth()

    const handleAddFood = async e => {
        e.preventDefault()
        const form = e.target;
        const food_name = form.food_name.value;
        const quantity = form.quantity.value;
        const notes = form.notes.value;
        const location = form.location.value;
        const expired_date = form.expired_date.value;
        const photo = form.photo.value;
        const status = form.status.value;

        const foodData={
            food_name,
            quantity,
            notes,
            location,
            expired_date,
            photo,
            status,
            donar:{
                name:user?.displayName,
                email:user?.email,
                photo: user?.photoURL,
            }
        }
        console.log(foodData)
    }


    return (
        <div className="border-2 rounded-xl p-4 md:p-10">
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
                  placeholder="Pickup Location"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Expired Date</span>
                </label>
                <input
                  type="text"
                  name="expired_date"
                  placeholder="Expired Date"
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Status</span>
            </label>
            <select
              name="status"
              id="status"
              className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Food Status"
            >
              <option value="available" selected>
              available
              </option>
              <option value="unavailable">
              unavailable
              </option>
            </select>
          </div>
            </div>
            <input
              type="submit"
              value="Add Food"
              className="btn text-white btn-block bg-accent"
            />
          </form>
        </div>
      );
};

export default AddFood;