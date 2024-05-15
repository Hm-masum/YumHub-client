import axios from "axios";
import { useEffect, useState } from "react";
import FoodDetails from "./FoodDetails";
import FoodCart from "../components/FoodCart";
import { Helmet } from "react-helmet-async";

const AvailableFood = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [foods, setFoods] = useState([]);
  const [layout,setLayout]=useState(false)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/all-foods?sort=${sort}&search=${search}`
      );
      setFoods(data);
    };
    getData();
  }, [search, sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handleLayout=() =>{
    setLayout(!layout)
  }

  return (
    <div className="container py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">

       <Helmet>
          <title>YumHub | Available Food</title>
       </Helmet>

      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                placeholder="Enter Food Name"
                aria-label="Enter Food Name"
              />

              <button className="px-1 md:px-4 py-2 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>

          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
              value={sort}
              name="sort"
              id="sort"
              className="border py-3 px-5 rounded-md"
            >
              <option value="">Sort By Expire Date</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>

          <div>
            <button onClick={handleLayout} className="btn text-white bg-gray-700 rounded-md hover:bg-gray-600">Change Layout</button>
          </div>
        </div>

        {/* Food Cart */}
        <div className={`grid grid-cols-1 gap-8 mt-8 xl:mt-16 ${layout === true ? 'md:grid-cols-2': 'md:grid-cols-3'}`}>
         {
            foods.map(food=><FoodCart key={food._id} layout={layout} food={food}></FoodCart>)
         }
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
