import { Link } from "react-router-dom"

const Slide = ({image,text}) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[32rem] rounded-lg'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center w-[70%] mx-auto'>
          <h1 className='text-3xl font-semibold text-white lg:text-5xl'>
            {text}
          </h1>
          <br />
          <Link to={'/available-food'} className='btn btn-outline btn-error text-center px-5 py-4 mt-4 font-medium rounded-md'>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
