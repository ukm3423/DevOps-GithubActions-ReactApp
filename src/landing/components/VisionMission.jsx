import  { useState } from 'react';

export default function VisionMissionToggle() {
    const [showMission, setShowMission] = useState(false);

    return (
        <div className="bg-white py-12">
            <div className="text-center">
                <h2 className="font-bold text-3xl mb-8  font-poppins border-b-4 border-red-500 inline-block p-2 rounded-lg ">
                    Our Vision & Mission
                </h2>
            </div>
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
                {/* Left side content */}
                <div className="w-full md:w-1/2">
                    <div className="flex border-b-2 border-red-500">
                        <button
                            className={`flex-1 px-6 py-2 text-lg font-semibold rounded-tl-lg ${!showMission ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setShowMission(false)}
                        >
                            Our Vision
                        </button>
                        <button
                            className={`flex-1 px-6 py-2 text-lg font-semibold rounded-tr-lg ${showMission ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setShowMission(true)}
                        >
                            Our Mission
                        </button>
                    </div>
                    <div className="text-lg text-gray-600 p-4 bg-white shadow rounded-b-lg">
                        {!showMission ? (
                            <p>
                                The Vision of <span className='font-semibold'>LEARNIFY INSTITUTE</span> is to become a leading Training Institute to provide instruction, certification, and research in the area of Education and to provide high-quality Employment oriented program under different Courses. We dedicated to developing the student to become highly competent, socially responsible, and having faith in ethical values.
                                <br />
                                It is developing as a Centre of Excellence for the teaching, quality research, and extension services for the development of nation and welfare of the society.
                            </p>
                        ) : (
                            <p>
                                The Mission of the <span className='font-semibold'>LEARNIFY INSTITUTE</span> is to eradicate illiteracy from the weaker section and to provide cheap and quality education. It is also planned to introduce such courses which may generate self-employment. We will build up its wide network of education centers all over India in the coming years.
                                <br />
                                Our mission is to deliver top-quality education and training in information technology, providing our students with the skills required to excel in their careers. We commit to maintaining the highest standards of education, mentorship, and student support, ensuring every student achieves academic and personal success.
                            </p>
                        )}
                    </div>
                </div>
                {/* Right side image */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <img
                        src="https://www.spartancomputereducation.com/public/web/assets/images/about/1.png"
                        alt="Our Vision and Mission"
                        className="max-w-full h-auto "
                    />
                </div>
            </div>
        </div>
    );
}
