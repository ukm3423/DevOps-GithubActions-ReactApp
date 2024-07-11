// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';

// Make sure to import the CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Ashutosh Roy",
    position: "Software Developer",
    message: "The courses at LEARNIFY Institute are comprehensive and up to date with industry standards. I highly recommend their programs to anyone looking to advance their IT career.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Data Analyst",
    message: "Thanks to the training I received at LEARNIFY, I was able to land a job I love in a field that is exciting and important. The instructors are very knowledgeable and supportive.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amanda Johnson",
    position: "Cloud Solutions Architect",
    message: "The hands-on experience provided by LEARNIFY Institute is unmatched. It prepared me for real-world scenarios and helped me secure a position at a top tech company.",
    imageUrl: "https://randomuser.me/api/portraits/women/50.jpg"
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear"
};

const Testimonials = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Our Students Say</h2>
          <p className="text-lg text-gray-600">Hear directly from our alumni about their experiences.</p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:p-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                <blockquote className="text-xl italic text-gray-600">{testimonial.message}</blockquote>
                <p className="text-lg font-semibold mt-4">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
