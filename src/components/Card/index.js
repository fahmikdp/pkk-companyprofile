import PropTypes from "prop-types";

const Card = ({ title, desc }) => {
  return (
    <div className="card w-full md:w-80 lg:w-96 bg-base-100 shadow-xl rounded-none">
      <div className="card-body">
        <h2 className="font-medium text-center text-lg md:text-xl lg:text-2xl">
          {title}
        </h2>
        <p className="text-center text-base lg:text-lg 2xl:text-xl">{desc}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
