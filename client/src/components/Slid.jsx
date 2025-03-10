import React, { useState } from "react";
import styled from "styled-components";

// Array of image paths (absolute paths)
const images = [
  "/images/phone.png",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Container>
      <SlideWrapper>
        <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <Controls>
          <Arrow onClick={prevSlide} direction="left">
            &#9664;
          </Arrow>
          <Arrow onClick={nextSlide} direction="right">
            &#9654;
          </Arrow>
        </Controls>
      </SlideWrapper>
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotContainer>
    </Container>
  );
};

export default Slideshow;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: auto;
  position: relative;
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Arrow = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#ff7f7f" : "#bbb")};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff7f7f;
  }
`;
