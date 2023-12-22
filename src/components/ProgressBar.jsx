import React, { useState, useEffect } from 'react';

const ProgressBar = ({ current, totalQuestions, resetProgress }) => {
  const [progress, setProgress] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      if(current == totalQuestions - 1){
        current = totalQuestions;
      }
      const newProgress = (current / totalQuestions) * 100;
      console.log('current',current)
      setProgress(newProgress);
    };

    if (resetProgress) {
      setProgress(0);
    } else {
      calculateProgress();
    }
  }, [current, totalQuestions, resetProgress]);

  useEffect(() => {
    const updateTooltip = () => {
      const progressBar = document.getElementById('progress-bar');
      const tooltip = document.getElementById('tooltip');

      if (progressBar && tooltip) {
        const progressBarWidth = progressBar.clientWidth;
        const tooltipWidth = tooltip.clientWidth;

        const newPosition = (progress / 100) * (progressBarWidth - tooltipWidth);
        setTooltipPosition(newPosition);
      }
    };

    updateTooltip();
  }, [progress]);

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <div
        id="progress-bar"
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          width: '100%',
          height: '8px',
          borderRadius: '4px',
          backgroundColor: '#ddd',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'rgb(122, 8, 228)',
            borderRadius: '4px',
          }}
        ></div>
      </div>
      <div
        id="tooltip"
        style={{
          position: 'absolute',
          top: '-24px',
          left: `${tooltipPosition}px`,
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        {`${Math.round(progress)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
