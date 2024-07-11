import bannerImage from '../../assets/page1.jpg';  // Replace this path with your actual banner image path
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
    return (
        <div className=" mx-auto ">
            {/* Banner Image with Overlay Text */}
            <div className="relative text-center">
                <img src={bannerImage} alt="Contact Us" className="w-full h-40 md:h-80 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">Contact Us</h1>
                </div>
            </div>

            {/* Three-section layout */}
            <div className="grid grid-cols-1 md:grid-cols-3  ">
                {/* Map Section */}
                <div className="order-2 md:order-1">
                    <div className="overflow-hidden h-96">
                        <iframe
                            title="LEARNIFY Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.046934360345!2d85.29279927588843!3d23.35031410401711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e13c10b5dad5%3A0x5db2322b3e66dae1!2sQuick%20Computer!5e0!3m2!1sen!2sin!4v1714040436801!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>

                {/* Institute Details Section */}
                <div className="bg-white shadow-lg p-6 order-1 md:order-2">
                    <h2 className="text-xl font-bold mb-4 uppercase relative overflow-hidden">
                        LEARNIFY Academy
                        <span className="block w-1/4 h-0.5 bg-red-500 absolute  bottom-0 left-0"></span> {/* Half bottom border */}
                    </h2>          
                    <p className="flex items-center mb-5">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-black-500" />
                        <span>+91 6201033951</span>
                    </p>
                    <p className="flex items-center mb-5">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-black-500" />
                        <span>contact@quickcomputeracademy.com</span>
                    </p>
                    <p className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-black-500" />
                        <span>Argora Chowk, City- Ranchi Jharkhand, 834002</span>
                    </p>
                </div>

                {/* Contact Form Section */}
                <div className="bg-gray-100 p-6 order-3 md:order-3">
                    <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea id="message" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
