import React, { useEffect, useRef } from 'react';
import ColorThief from 'color-thief';

const JobImage = ({ imageSrc }) => {
  const imageRef = useRef();

  useEffect(() => {
    const colorThief = new ColorThief();
    const image = imageRef.current;

    if (image.complete) {
      applyBackgroundColor(colorThief.getColor(image));
    } else {
      image.onload = () => {
        applyBackgroundColor(colorThief.getColor(image));
      };
    }

    return () => {
      image.onload = null;
    };
  }, [imageSrc]);

  const applyBackgroundColor = (color) => {
    // Set the background color dynamically
    document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };

  return (

        <div className=" w-15 h-20  mx-2 bg-strokeGray rounded-lg  ">
    <img ref={imageRef} src={require(`./assets/${imageSrc}`).default} alt="Image" className="w-full h-full object-cover" />
   

    </div>
  );
};

export default JobImage;
