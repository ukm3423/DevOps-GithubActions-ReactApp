// Sample data for faculty members
const facultyMembers = [
    {
        name: "John Doe",
        title: "Professor of Computer Science",
        bio: "With over 20 years of experience in teaching and research, Professor Doe specializes in artificial intelligence and machine learning.",
        imageUrl: "https://media.licdn.com/dms/image/C4D03AQG98GJX5cyVoQ/profile-displayphoto-shrink_400_400/0/1656265573632?e=2147483647&v=beta&t=d1PpNaDSeWWXG226_u-kGbGjQC2vk1sSfn8VdLPE5Uk"
    },
    {
        name: "Jane Smith",
        title: "Associate Professor of Cybersecurity",
        bio: "Jane Smith has a decade of experience in cybersecurity, focusing on ethical hacking and network security.",
        imageUrl: "https://avatars2.githubusercontent.com/u/26637638?v=4?s=100"
    },
    {
        name: "Alice Johnson",
        title: "Assistant Professor of Software Engineering",
        bio: "Alice Johnson's research interests include software development methodologies and the use of virtual reality in education.",
        imageUrl: "https://avatars.githubusercontent.com/u/12498987?v=4"
    }
];

export default function Faculty() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6"> {/* Increased bottom margin for more space */}
                    <h2 className="text-xl font-bold mb-4 uppercase relative inline-block overflow-hidden">
                        Our <span className="text-yellow-500">Faculties</span>
                        <div className="mt-3">
                            <span className="block w-full h-0.5 bg-yellow-500  absolute bottom-0 left-0"></span> {/* Full-width bottom border */}
                        </div>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {facultyMembers.map((member, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
                            <div className="overflow-hidden">
                                <img className="w-full transform transition duration-300 ease-in-out hover:scale-110" src={member.imageUrl} alt={member.name} />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{member.name}</div>
                                <p className="text-gray-700 text-base">{member.title}</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
