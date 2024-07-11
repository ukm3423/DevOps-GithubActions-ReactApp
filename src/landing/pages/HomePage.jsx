import ImageSlider from "../components/ImageSlider";
import WhyUs from "../components/WhyUs";
import OurAchievements from "../components/OurAchievements";
import VisionMission from "../components/VisionMission";
import GoogleMap from "../components/GoogleMap";
import Slider from 'react-slick';
// Import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Introduction from "../components/Introduction";
import { FaWhatsapp } from 'react-icons/fa'; // Ensure you have 'react-icons' library installed
import Testimonials from "../components/Testimonials";


const courses = [
  {
    id: 1,
    title: 'Java Full Stack',
    description: 'Comprehensive course covering Java programming and full-stack web development.',
    imageUrl: 'https://deved-images.nyc3.cdn.digitaloceanspaces.com/Java-series/java-banner.jpg'
  },
  {
    id: 2,
    title: 'MERN Stack',
    description: 'Learn MongoDB, Express.js, React, and Node.js to build modern web applications.',
    imageUrl: 'https://nitsantech.com/fileadmin/ns_theme_ns2019/blog/_live/What_is_the_MERN_stack_and_how_do_I_use_it_/What_is_the_MERN_stack_and_how_do_I_use_it.jpg'
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Fundamentals of web development including HTML, CSS, and JavaScript.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg'
  },
  {
    id: 4,
    title: 'Database Engineer',
    description: 'Master database concepts and SQL to become a skilled database engineer.',
    imageUrl: 'https://editor.analyticsvidhya.com/uploads/49451dbms1.jpg'
  },
  {
    id: 5,
    title: 'Cloud Computing',
    description: 'Dive into cloud computing with AWS, Azure, and Google Cloud Platform.',
    imageUrl: 'https://www.shutterstock.com/image-photo/man-use-laptop-cloud-computing-600nw-2018729366.jpg'
  },
  {
    id: 6,
    title: 'Data Science',
    description: 'Explore data analysis, machine learning, and statistical modeling.',
    imageUrl: 'https://t4.ftcdn.net/jpg/02/65/28/09/360_F_265280966_3F83JFHvgU3b4XclfS0TdI148h4dJuxD.jpg'
  },
  // Add more courses as needed
];

const settings = {
  dots: true, // Shows pagination dots at the bottom of the slider
  infinite: true, // Enables infinite looping of slides
  speed: 500, // Animation speed in milliseconds
  slidesToShow: 3, // Number of slides to show in one view
  slidesToScroll: 1, // Number of slides to scroll at once
  autoplay: true, // Auto-play the slider
  autoplaySpeed: 3000, // Time each slide is displayed
  cssEase: "linear", // CSS animation easing function
  responsive: [
    {
      breakpoint: 1024, // Settings for devices below 1024px
      settings: {
        slidesToShow: 2, // Show 2 items on tablet devices
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600, // Settings for devices below 600px
      settings: {
        slidesToShow: 1, // Show 1 item on mobile devices
        slidesToScroll: 1
      }
    }
  ]
};



function HomePage() {
  const exploreCourse = (courseId) => {
    console.log("Exploring course", courseId);
    // Here you would typically route to a detailed page or open a modal with course details
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <ImageSlider />
      <Introduction />
      {/*================= Courses Component Start ============= */}
      <div className="container max-w-10xl mx-auto px-6 mt-3 sm:px-6 mb-10 lg:px-8">
        <div className="text-center mt-2">
          <h2 className="text-2xl font-bold mb-0 uppercase relative inline-block overflow-hidden pb-1">
            Our <span className="text-yellow-500 relative"> OUR TRENDING COURSES
              <span className="absolute bottom-0 left-0 w-full bg-yellow-500 h-0.5" aria-hidden="true"></span>
            </span>
          </h2>
        </div>

        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="px-3 "> {/* Adjust padding for spacing */}
              <div className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-gray-600 mt-2 mb-4">{course.description}</p>
                  <button
                    onClick={() => exploreCourse(course.id)}
                    className="text-blue-500 hover:text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-blue-700 rounded transition-colors duration-300"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>


      </div>



      {/*================= Courses Component End ============= */}
      <VisionMission />
      <div className="container mx-auto py-4 md:py-4">
        <WhyUs />
      </div>
      {/* Make OurAchievements full width by not wrapping it inside the container */}
      <OurAchievements />
      <Testimonials />
      <GoogleMap />

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-4 right-4 flex items-center justify-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300">
        <a href="https://wa.me/+918340342571" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <FaWhatsapp className="text-2xl mr-2" /> {/* WhatsApp icon */}
          <span className="font-medium">Chat with Us</span>
        </a>
      </div>

    </div>
  );
}

export default HomePage;
