import React, { useState, useEffect, useRef } from 'react';
import './Titles.css';

const Titles = ({ title }) => {
    const titleRef = useRef(null);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust the threshold as needed
      };
  
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the element becomes visible, add the animation class
            entry.target.classList.add('scale-in-center');
            // Disconnect the observer since we don't need it anymore
            observer.disconnect();
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      // Start observing the target element
      if (titleRef.current) {
        observer.observe(titleRef.current);
      }
  
      // Cleanup: disconnect the observer when the component unmounts
      return () => {
        if (titleRef.current) {
          observer.unobserve(titleRef.current);
        }
      };
    }, []);
  return (
    <div className='title' ref={titleRef}>
      <p>{title}</p>
    </div>
  );
};

export default Titles;
