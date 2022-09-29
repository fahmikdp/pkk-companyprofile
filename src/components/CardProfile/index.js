import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import PropTypes from "prop-types";

const CardProfile = ({ img, name, role, pathfb, pathig }) => {
  return (
    <div>
      <div className="card w-90 bg-slate-50 shadow-xl">
        <figure className="px-10 pt-8 w-[260px] h-[260px] mx-auto">
          <img src={img} alt="Shoes" className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <i className="text-zinc-600 ">{role}</i>
          <div className="card-actions font-light mt-2">
            <button className="btn btn-circle btn-primary">
              <a href={pathfb}>
                <FaFacebookF className="text-lg" />
              </a>
            </button>
            <button className="btn btn-circle btn-primary">
              <a href={pathig}>
                <AiFillInstagram className="text-lg" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// CardProfile.propTypes = {
//   name: PropTypes.string.isRequired,
//   role: PropTypes.string.isRequired,
// };

export default CardProfile;
