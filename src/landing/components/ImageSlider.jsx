import  { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import page1 from '../../assets/page1.jpg';
import page2 from '../../assets/page2.jpg';
import page3 from '../../assets/page3.jpg';


function ImageSlider() {
    const [animationKey, setAnimationKey] = useState(0); // Key to reset animations

    const slides = [
        {
            src:page3,
            alt: "Slide 1",
            title: "Welcome to LEARNIFY",
            subtitle: "A great place for Computer Training.",
            animation: "slideDown"
        },
        {
            // src:"https://www.albany.edu/sites/default/files/computer-science-cropped.jpg",
            src : page2,
            alt: "Slide 2",
            title: "KEY FOCUS ON LEARNING",
            subtitle: "We focus on methods to lead and train you in a more thoughtful direction",
            animation: "slideUp"
        },
        {
            // src: "https://www.cbit.ac.in/wp-content/uploads/2019/01/CSE_DEPT-scaled.jpeg",
            // src: "https://saitm.ac.in/media/files/computer-5-1600_Ti29pLG_sR4cy9w.jpg",
            // src:"https://www.albany.edu/sites/default/files/history-homepage-hero-1900x700.jpg",
            src : page1,
            alt: "Slide 3",
            title: "Covering a wide variety of Courses",
            subtitle: "Break The Boundaries And Discover New Opportunities",
            animation: "slideRight"
        }
    ];

    return (
        <>
            <style>
                {`
                @keyframes slideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideDown {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideRight {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                `}
            </style>
            <div className="mx-auto md:max-w-screen-xxl md:relative md:z-0 md:-mt-0">
                <Carousel
                    infiniteLoop
                    autoPlay
                    interval={4000}
                    showArrows
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    centerMode
                    centerSlidePercentage={100}
                    onChange={(index) => setAnimationKey(index)} // Update the key on slide change
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="relative h-[30vh] md:h-auto">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <img src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-cover object-center" />
                            <div key={animationKey}
                                className="absolute inset-0 flex items-center justify-center p-4"
                                style={{ animation: `${slide.animation} 1s ease-out forwards` }}>
                                <div className="text-center">
                                    <p className="text-3xl md:text-8xl text-white font-bold drop-shadow-md">{slide.title}</p>
                                    <p className='text-sm mt-2 md:text-3xl text-white'>{slide.subtitle}</p>
                                    <button className="mt-4 md:px-6 md:py-2 px-3 py-1 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default ImageSlider;
