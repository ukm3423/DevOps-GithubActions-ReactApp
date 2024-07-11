// eslint-disable-next-line no-unused-vars
import React from 'react';
import directorImage from '../../assets/faculty.jpg'; // Path to the director's image
import instituteImage from '../../assets/page2.jpg'; // Path to the institute image

export default function About() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">About LEARNIFY</h1>
          <p className="text-sm text-gray-600">
            Leading the way in IT education and innovation.
          </p>
          <img src={instituteImage} alt="Institute" className="mt-4 w-full object-cover h-64 rounded-lg shadow-lg" />
        </div>

        {/* Mission Statement */}
        <div className="py-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            The Mission of the LEARNIFY is to eradicate illiteracy from the weaker section and to provide cheap and quality education. It is also planned to introduce such courses which may generate self-employment. We will build up its wide network of education centers all over India in the coming years.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to deliver top-quality education and training in information technology, providing our students with the skills required to excel in their careers. We commit to maintaining the highest standards of education, mentorship, and student support, ensuring every student achieves academic and personal success.
          </p>
          <p className="text-gray-700">
            To educate and empower students with state-of-the-art technical skills, preparing them for successful careers in the information technology sector.
          </p>
        </div>


        {/* Director's Note */}
        <div className="py-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">A Word from Our Director</h2>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <img
              src={directorImage}
              alt="Director"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto md:mx-0 md:mr-8 mb-4 md:mb-0 object-cover" // Adjust sizes for mobile and desktop
            />
            <div>
              <p className="text-gray-700">
                "At LEARNIFY, we believe in nurturing talent and fostering the innovative skills that drive progress. Join us as we explore and advance in the ever-evolving tech landscape."
              </p>
              <p className="mt-4 italic text-gray-600">- John Doe, Director</p>
            </div>
          </div>
        </div>


        {/* History and Achievements */}
        <div className="py-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Our History and Achievements</h2>
          <p className="text-gray-700">
            Since our founding in 2008, LEARNIFY has been at the forefront of technology education. With numerous accolades and a consistent record of 90% graduate employment rate, we stand as a beacon of learning and success in the tech community.
          </p>
        </div>
      </div>
    </div>
  );
}
