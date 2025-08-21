import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants"; // Importing the constant for the API URL

const RESTAURANT_CARD_TYPE =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
const ITEM_CATEGORY_TYPE =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); // <-- match your route: /restaurant/:resId

  useEffect(() => {
    if (!resId) return; // guard for safety
    (async () => {
      try {
        const url = MENU_API_URL(resId); // <-- build URL here
        // console.log("Fetching:", url);
        const resp = await fetch(url);
        const json = await resp.json();
        setResInfo(json);
      } catch (e) {
        console.error("Failed to fetch menu:", e);
        setResInfo({});
      }
    })();
  }, [resId]);
  // Loading state
  if (!resInfo?.data?.cards) return <Shimmer />;

  // ----- Header: find the restaurant card by @type (order can change)
  const restaurantCard = resInfo.data.cards.find(
    (c) => c?.card?.card?.["@type"] === RESTAURANT_CARD_TYPE
  );
  const info = restaurantCard?.card?.card?.info ?? {};
  const { name = "Restaurant", cuisines = [], costForTwoMessage = "" } = info;

  // ----- Menu: find all ItemCategory sections in REGULAR group
  const regularCards =
    resInfo?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap // the card that contains groupedCard
      ?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (c) => c?.card?.card?.["@type"] === ITEM_CATEGORY_TYPE
  );

  // Helper to format price (Swiggy sometimes uses defaultPrice)
  const formatPrice = (p) => {
    const paise = p ?? 0;
    return `₹${(paise / 100).toFixed(0)}`;
  };

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      {/* Render categories & items */}
      {categories.map((cat, idx) => {
        const catCard = cat.card.card;
        const items = catCard?.itemCards || [];
        if (!items.length) return null;

        return (
          <div key={idx} className="category">
            <h2>{catCard.title}</h2>
            <ul>
              {items.map((it, i) => {
                const dish = it?.card?.info || {};
                const price = dish.price ?? dish.defaultPrice;
                return (
                  <li key={i}>
                    {dish.name}
                    {price != null ? ` — ${formatPrice(price)}` : null}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
