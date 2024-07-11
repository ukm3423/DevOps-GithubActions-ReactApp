import { useState } from 'react';

// Dummy data for photos and videos
const photos = [
    { src: 'https://static9.depositphotos.com/1594308/1124/i/450/depositphotos_11240768-stock-photo-computer-class.jpg', alt: 'Photo 1' },
    { src: 'https://www.shutterstock.com/image-photo/workshop-university-rear-view-students-600nw-298735595.jpg', alt: 'Photo 2' },
    { src: 'https://www.shutterstock.com/image-photo/informatics-workshop-university-rear-view-600nw-309525356.jpg', alt: 'Photo 3' },
    { src: 'https://static8.depositphotos.com/1194063/931/i/450/depositphotos_9314831-stock-photo-computer-training.jpg', alt: 'Photo 4' },
    { src: 'https://i.pinimg.com/736x/e5/ae/a1/e5aea16b2d600c2bdd92b7ce26b3edee.jpg', alt: 'Photo 5' },
    { src: 'https://www.shutterstock.com/image-photo/office-white-collar-workers-working-600nw-69626098.jpg', alt: 'Photo 6' },
];

const videos = [
    { src: 'https://via.placeholder.com/600x400?text=Video+1', alt: 'Video 1' },
    { src: 'https://via.placeholder.com/600x400?text=Video+2', alt: 'Video 2' },
    { src: 'https://via.placeholder.com/600x400?text=Video+3', alt: 'Video 3' },
];

const MediaGallery = () => {
    const [galleryType, setGalleryType] = useState('photos'); // 'photos' or 'videos'
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleOpenModal = (item) => {
        setModalContent(galleryType === 'photos' ? (
            <img src={item.src} alt={item.alt} className="w-full h-auto max-w-4xl mx-auto" />
        ) : (
            <video src={item.src} controls className="w-full h-auto max-w-4xl mx-auto">
                Your browser does not support the video tag.
            </video>
        ));
        setModalOpen(true);
    };
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Gallery</h1>
                <div className="flex justify-center gap-4 mb-6">
                    <button
                        className={`px-4 py-2 rounded-lg ${galleryType === 'photos' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        onClick={() => setGalleryType('photos')}
                    >
                        Photo Gallery
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${galleryType === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        onClick={() => setGalleryType('videos')}
                    >
                        Video Gallery
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {(galleryType === 'photos' ? photos : videos).map((item, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer" onClick={() => handleOpenModal(item)}>
                        <img src={item.src} alt={item.alt} className="w-full h-auto transform hover:scale-110 transition-transform duration-300 ease-in-out" />
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
                    <div className="bg-white p-5 rounded-lg shadow-xl">
                        {modalContent}
                        <button onClick={() => setModalOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MediaGallery;
