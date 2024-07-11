// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaAward, FaUserGraduate, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';
import CountUp from 'react-countup';
import backgroundImage from '../../assets/page1.jpg';  // Ensure this path is correct
import VisibilitySensor from 'react-visibility-sensor';  // For triggering animation on view

export default function OurAchievements() {
  return (
    <div 
      className="w-full" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' ,
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="w-full px-4 md:py-20 py-6 bg-black bg-opacity-50">  {/* Dark overlay */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">Our Achievements</h2>
        <div className="flex flex-wrap justify-center items-center text-center">
          <div className="p-4 bg-gray-100 rounded-lg shadow m-2 flex-1">
            <FaAward className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              <CountUp end={8} duration={2.75} prefix="+" suffix=" Years of Experience" redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h3>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow m-2 flex-1">
            <FaUserGraduate className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              <CountUp end={5000} duration={2.75} prefix="+" suffix=" Certified Students" redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h3>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow m-2 flex-1">
            <FaChalkboardTeacher className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              <CountUp end={20} duration={2.75} prefix="" suffix=" Experienced Trainers" redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h3>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow m-2 flex-1">
            <FaHandsHelping className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              <CountUp end={80} duration={2.75} suffix="% Success Guarantee" redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
