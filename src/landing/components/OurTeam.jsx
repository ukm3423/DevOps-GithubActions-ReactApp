
// Example data array
const teamMembers = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Graphic Designer',
    description: 'Jane has over 10 years of experience in graphic design specializing in digital art and marketing materials.',
    photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' 
  },
  {
    id: 2,
    name: 'Anupriya Roy',
    role: 'Software Engineer',
    description: 'Anupriya is a full-stack developer with a keen interest in scalable cloud applications.',
    photoUrl: 'https://pbs.twimg.com/profile_images/1488405636836585472/t6alnpQa_400x400.jpg'

  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Project Manager',
    description: 'Emma excels in project planning and execution, with a focus on agile methodologies.',
    photoUrl: 'https://hundlur.com/uploadsold/1/3/6/6/136639131/dusk-profile-3_2.jpg'

  }
];

export default function OurTeam() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold text-center mb-6'>Meet Our Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {teamMembers.map(member => (
          <div key={member.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={member.photoUrl} alt={member.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{member.name}</div>
              <p className="text-gray-700 text-base">
                {member.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
