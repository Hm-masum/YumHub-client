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
    donar
  } = food;
  return (
    <div className="p-4 rounded-xl hover:scale-105 hover:border-accent border-opacity-3 border-2 border-gray-100 space-y-3">
      <div className="flex justify-center items-center rounded-2xl">
        <img src={photo} className="h-[200px] w-full rounded-lg" alt="" />
      </div>
      <div className="space-y-3">
        <div className="flex gap-2" title={notes}>{notes.substring(0,40)}.....</div>
        <h2 className="text-xl lg:text-2xl font-semibold">{food_name}</h2>
        <div className="flex justify-between">
          <p className="flex gap-1 items-center">Quantity : {quantity}</p>
          <p className="flex gap-1 items-center">
            {/* {expired_date} */}
            Location: {location}
          </p>
        </div>
        <p className="border-t border border-gray-300"></p>
        <div className="flex justify-between">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={donar.photo} />
            </div>
          </div>
          <p className="flex gap-1 items-center">
            Donar Name: {donar.name}
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
