const RestaurantCard = (props) => {
  const { resDATA } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resDATA?.info; // Destructuring the properties from resDATA
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} ⭐</p>
      <p>{costForTwo} </p>
      <p>{deliveryTime} Minutes 🕒</p>
    </div>
  );
};

export default RestaurantCard;
