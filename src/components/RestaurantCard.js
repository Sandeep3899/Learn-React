const RestaurantCard = (props) => {
  const { resDATA } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resDATA; // Destructuring the properties from resDATA
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/d38881f4-bc13-41c4-8e5b-3ab4cc2b48c9.png"
        }
      />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} ⭐</p>
      <p>{costForTwo} 🕒</p>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
