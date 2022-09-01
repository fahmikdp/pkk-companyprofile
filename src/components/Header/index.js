// import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <h1
        className="text-center xl:text-[40px] md:text-4xl text-[32px] font-bold 
        after:absolute 
        after:w-20 after:h-1
        sm:after:w-24 
        after:left-0 after:right-0
        after:m-auto
         after:bg-black
        after:mt-12
        md:after:mt-12
        xl:after:mt-14"
      >
        {title}
      </h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
