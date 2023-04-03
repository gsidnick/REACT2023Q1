import './IconChevron.css';
import React from 'react';

function IconChevron() {
  return (
    <div className="icon-chevron">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="icon-chevron__svg"
          d="M2.35348 6.35354C2.15822 6.5488 2.15822 6.86538 2.35348 7.06065L9.42455 14.1317C9.52765 14.2348 9.66457 14.2835 9.7996 14.2777C9.93474 14.2836 10.0718 14.2349 10.175 14.1317L17.2461 7.06066C17.4413 6.8654 17.4413 6.54882 17.2461 6.35355C17.0508 6.15829 16.7342 6.15829 16.5389 6.35355L9.79977 13.0927L3.06058 6.35354C2.86532 6.15828 2.54874 6.15828 2.35348 6.35354Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default IconChevron;
