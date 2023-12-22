import React, { useState, useEffect } from 'react';

const Option = ({ options, onClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (selectedOption !== null) {
      const newProgress = (selectedOption / (options.length - 1)) * 100;
      setProgress(newProgress);
    }
  }, [selectedOption, options]);

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.pageX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const clickedPercentage = (clickPosition / progressBarWidth) * 100;

    let closestOptionIndex = 0;
    let closestOptionDistance = Math.abs(clickedPercentage - (0 / (options.length - 1)) * 100);

    options.forEach((_, index) => {
      const optionPercentage = (index / (options.length - 1)) * 100;
      const distance = Math.abs(clickedPercentage - optionPercentage);

      if (distance < closestOptionDistance) {
        closestOptionIndex = index;
        closestOptionDistance = distance;
      }
    });

    setSelectedOption(closestOptionIndex);
    onClick(closestOptionIndex); // Pass the selected index to the parent component
  };

  return (
    <div style={{ position: 'relative', width: '30rem' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          width: '100%',
          height: '4px',
          backgroundColor: '#ddd',
          borderRadius: '4px'
        }}
        onClick={handleProgressBarClick}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'rgb(122, 8, 228)',
            borderRadius: '4px'
          }}
        ></div>
        {options.map((_, index) => (
          selectedOption === null || selectedOption === index ? (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: '-50%',
                left: `${(index / (options.length - 1)) * 100}%`,
                transform: 'translateX(-50%)',
                cursor: 'pointer',
                border: '2px solid grey',
                borderRadius: '50%',
                width: '6px',
                height: '6px',
                borderRadius: '4px',
                backgroundColor: selectedOption === index ? 'rgb(122, 8, 228)' : 'grey',
              }}
            ></div>
          ) : null
        ))}
      </div>
      {options.map((option, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: '20px',
            left: `${(index / (options.length - 1)) * 100}%`,
            transform: 'translateX(-50%)',
            textAlign: 'center',
            textWrap: 'wrap',
            whiteSpace: 'pre'
          }}
          onClick={() => onClick(index)}  // Pass the selected index to the parent component
        >
          {option.replace(' ', '\n')}
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          top: '110px',
          left: '0',
          width: '100%',
          textAlign: 'center',
          borderRadius: '4px'
        }}
      >
      </div>
    </div>
  );
};

export default Option;
