import React from 'react';

export const CTAButton = ({ btnText, href, children }) => (
  <div
    className="button w-40 h-12 bg-lightBlue hover:bg-lightBlueHover cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full border-[1px] border-blue-400"
  >
    <a className="flex flex-col justify-center items-center h-full font-bold text-Black text-lg " href={href} target="_blank" rel="noopener noreferrer">
      {children || btnText}
    </a>
  </div>
);