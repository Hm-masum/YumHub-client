import { useEffect, useState } from "react";
import FoodCart from "../components/FoodCart";
import axios from "axios";
import Carosel from "../components/Carosel";
import Accordion from "../components/Accordion";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

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
      <Helmet>
        <title>YumHub | Home</title>
      </Helmet>

      <Carosel></Carosel>   
      <div className="space-y-4 my-5">
        <motion.h1 
         initial={{ x: 100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{delay:0.2, x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn", duration:1}}
         className="text-4xl font-semibold text-center">Features Foods</motion.h1>
        <motion.p
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{delay:0.2, x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn", duration:1}}
         className="lg:w-[55%] text-center mx-auto opacity-80">
          Explore the answers to all your questions with our client Q&A. Clear,
          concise, and comprehensive – your inquiries, our expertise
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {foods.slice(0, 6).map((food) => (
            <FoodCart key={food._id} food={food}></FoodCart>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to={"/available-food"}
            className="btn px-5 btn-outline bg-red-500 text-white"
          >
            Show All
          </Link>
        </div>
      </div>
      <Accordion></Accordion>
      <Contact></Contact>
    </div>
  );
};

export default Home;
