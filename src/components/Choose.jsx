

const Choose = () => {
  return (
    <div className="my-4 lg:my-14">
      <h2 className="text-2xl lg:text-5xl font-semibold my-3">
        Why you choose us
      </h2>
      <div className="md:flex justify-center items-center gap-4">
        <div className="md:w-[50%] space-y-3">
          <p></p>
          <img
            className="md:h-[500px] rounded-tr-[60px] rounded-bl-[60px]"
            src="https://i.ibb.co/VQGpNrZ/pexels-paduret-1193743.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:w-[50%]">
          <div className="flex flex-col space-y-3 border rounded-xl p-2">
            <img
              className="rounded-xl w-[150px]"
              src={"https://i.ibb.co/zx5BJxr/pexels-pixabay-355948.jpg"}
              alt=""
            />
            <h2 className="font-semibold">NEW IDEAS</h2>
            <p>
              Explore Our Latest Innovations in Art &
              Craft Supplies. Discover Fresh Ideas to Fuel Your Creativity
            </p>
          </div>
          <div className="flex flex-col space-y-3 border rounded-xl p-2">
            <img
              className="rounded-xl w-[150px]"
              src={"https://i.ibb.co/kKSWWP2/pexels-daiangan-102127.jpg"}
              alt=""
            />
            <h2 className="font-semibold">PASSION DRIVEN</h2>
            <p>
              Explore Our Passion-Driven Selection of Art &
              Craft Supplies.
            </p>
          </div>
          <div className="flex flex-col space-y-3 border rounded-xl p-2">
            <img
              className="rounded-xl w-[150px]"
              src={"https://i.ibb.co/2KNCWyf/pexels-designecologist-887349.jpg"}
              alt=""
            />
            <h2 className="font-semibold">ORGANICS</h2>
            <p>
              Explore Our Organics Collection for
              Sustainable Art & Craft Supplies and Embrace Eco-Friendly
              Materials.
            </p>
          </div>
          <div className="flex flex-col space-y-3 border rounded-xl p-2">
            <img
              className="rounded-xl w-[150px]"
              src={
                "https://i.ibb.co/P9FZG24/pexels-jadson-thomas-164235-542556.jpg"
              }
              alt=""
            />
            <h2 className="font-semibold">VIVID COLORS</h2>
            <p>
              Dive into Vibrant Hues: Discover Our Palette of Vivid Colors for
              Your Art & Craft Projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
