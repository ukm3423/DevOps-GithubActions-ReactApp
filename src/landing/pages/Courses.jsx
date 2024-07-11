export default function Courses() {
  // Updated course data with images
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
    {
      id: 7,
      title: 'Java Full Stack',
      description: 'Comprehensive course covering Java programming and full-stack web development.',
      imageUrl: 'https://editor.analyticsvidhya.com/uploads/49451dbms1.jpg'
    },
    {
      id: 8,
      title: 'MERN Stack',
      description: 'Learn MongoDB, Express.js, React, and Node.js to build modern web applications.',
      imageUrl: 'https://nitsantech.com/fileadmin/ns_theme_ns2019/blog/_live/What_is_the_MERN_stack_and_how_do_I_use_it_/What_is_the_MERN_stack_and_how_do_I_use_it.jpg'
    },

  ];

  const exploreCourse = (courseId) => {
    console.log("Exploring course", courseId);
    // Here you would typically route to a detailed page or open a modal with course details
  };
  return (
    <div className="container max-w-10xl mx-auto px-6 mt-10 sm:px-6 mb-10 lg:px-8">
      <div className="text-center mt-3">
        <h2 className="text-xl font-bold mb-0 uppercase relative inline-block overflow-hidden pb-1">
          Our <span className="text-yellow-500 relative">OUR COURSES
            <span className="absolute bottom-0 left-0 w-full bg-yellow-500 h-0.5" aria-hidden="true"></span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out" />
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
        ))}
      </div>
    </div>
  );
}