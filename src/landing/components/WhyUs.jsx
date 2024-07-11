import { MdComputer, MdSchool, MdSupportAgent } from 'react-icons/md';

export default function WhyUs() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose LEARNIFY ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <MdComputer className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
            <p className="text-gray-600">Our courses always incorporate the latest in computer technology, ensuring you are industry-ready.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <MdSchool className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry experts who bring real-world experience to the classroom.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <MdSupportAgent className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Get round-the-clock support from our team to help you with any academic or technical questions.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
