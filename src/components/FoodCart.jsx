import { Link } from "react-router-dom";

const FoodCart = ({ food }) => {
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
  } = food;
  return (
    <div className="p-4 rounded-xl border-2 border-gray-100 space-y-3">
      <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
        <img src={photo} className="h-[225px] rounded-lg" alt="" />
      </div>
      <div className="space-y-3">
        <div className="flex gap-2">{notes}</div>
        <h2 className="text-xl lg:text-2xl font-semibold">{food_name}</h2>
        <p className="font-semibold">{location}</p>
        <p className="border-t border border-gray-300"></p>
        <div className="flex justify-between">
          <p className="flex gap-1 items-center">
            {quantity} 
          </p>
          <p className="flex gap-1 items-center">
            {expired_date}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link to={`/food/${_id}`} className="btn w-full btn-accent">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
