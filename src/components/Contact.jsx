import { MdAddIcCall } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { BsChatQuoteFill } from "react-icons/bs";

const Contact = () => {

    return (
        <div className="md:flex justify-center items-center gap-4 my:4 lg:my-12">
            <div className="space-y-3">
                <h4 className="text-3xl font-semibold text-orange-400">You Contact Us</h4>
                <h2 className="text-5xl font-semibold">Easy to contact us</h2>
                <p>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-lg">
                    <div className="border p-4 rounded-lg ">
                        <div className="flex space-x-7">
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <MdAddIcCall className="text-3xl"/>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">Call</p>
                                <p>01817267861</p>
                            </div>
                        </div>
                        <button className="btn w-full my-2 text-blue-600">Call Now</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <div className="flex space-x-7">
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <FaRocketchat className="text-3xl"/>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">Chat</p>
                                <p>01817267861</p>
                            </div>
                        </div>
                        <button className="btn w-full my-2 text-blue-600">Call Now</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <div className="flex space-x-7">
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <IoChatbubbleEllipsesSharp className="text-3xl"/>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">Video call</p>
                                <p>01817267861</p>
                            </div>
                        </div>
                        <button className="btn w-full my-2 text-blue-600">Call Now</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <div className="flex space-x-7">
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <BsChatQuoteFill className="text-3xl"/>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold">What's app</p>
                                <p>01817267861</p>
                            </div>
                        </div>
                        <button className="btn w-full my-2 text-blue-600">Call Now</button>
                    </div>
                </div>
            </div>
            <div>
                <img className="md:h-[500px] rounded-tr-[60px] rounded-bl-[60px]" src="https://i.ibb.co/Wp9sqBr/pexels-minan1398-1406863.jpg" alt="" />
            </div>
        </div>
    );
};

export default Contact;