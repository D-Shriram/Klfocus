import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Slideshow.css';  // Importing the updated CSS file
import { Link } from 'react-router-dom';



// Import images from the 'assets' folder
import img1 from '../images/x.jpg';
import img2 from '../images/y.jpg';
import img3 from '../images/z.jpg';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false); // To control when slideshow starts
  const [showText, setShowText] = useState(false); // To control when the text appears
  const [showSlideshow, setShowSlideshow] = useState(false); // To control when the slideshow starts

  // Array of slides with image imports and captions
  const slides = [
    {
      id: 1,
      image: img1,
      caption: 'New Year Celebrations',
    },
    {
      id: 2,
      image: img2,
      caption: 'Club meeting',
    },
    {
      id: 3,
      image: img3,
      caption: 'Tech Session',
    },
  ];

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to handle dot click and navigate to the clicked slide
  const handleDotSelection = (index) => {
    setCurrentIndex(index);
  };

  // Use effect to handle the background image and text animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Show text after 2 seconds
    }, 2000); // Delay before showing text

    const slideshowTimer = setTimeout(() => {
      setIsInitialized(true); // Start slideshow after 2 seconds
      setShowSlideshow(true); // Make slideshow appear after text
    }, 4000); // Delay the slideshow by 2 seconds after text appears

    return () => {
      clearTimeout(timer);
      clearTimeout(slideshowTimer);
    };
  }, []);

  return (
    <div className="slideshowWrapper">
      {/* Welcome Text Section */}
      <div className={`welcomeText ${showText ? 'showText' : ''} ${showSlideshow ? 'moveUpText' : ''}`}>
        <h1>KL Focus Resolvance</h1>
      </div>

      {/* Slideshow Content */}
      <div className={`slideshowContent ${showSlideshow ? 'startAnimation' : ''}`}>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="slideImage"
        />
        <div className="captionText">{slides[currentIndex].caption}</div>
      </div>

      {/* Next and Previous Buttons */}
      <button className="navButton prevButton" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="navButton nextButton" onClick={goToNextSlide}>
        &#10095;
      </button>

      {/* Dots Indicators */}
      <div className="dotsWrapper">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dotItem ${index === currentIndex ? 'activeDot' : ''}`}
            onClick={() => handleDotSelection(index)}
          ></span>
        ))}
      </div>
      <div className='d-flex flex-column flex-sm-row align-items-center'>
                <Link to='/login'>
                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Get Started</button>
                </Link>
                <Link to="/aboutus">
                <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>About Us</button>
                </Link>
            </div>



      {/* Get Started & About Us Buttons */}
      {/* <div className="d-flex flex-column flex-sm-row align-items-center mt-3"> */}
      <div className="d-flex flex-column flex-sm-row align-items-center">
        <Link to='/login'>
          <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Get Started</button>
        </Link>
        <Link to="/aboutus">
          <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>About Us</button>
        </Link>
      </div>
    </div>
    
    
  );
};

export default Slideshow;
