import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import axios from "axios";
import FoodCart from "../components/FoodCart";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/foods`);
      setFoods(data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
            foods.map(food =><FoodCart key={food._id} food={food}></FoodCart>)
        }
      </div>
    </div>
  );
};

export default Home;
