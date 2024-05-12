import { useEffect, useState } from "react";
import FoodCart from "../components/FoodCart";
import axios from "axios";

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
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
