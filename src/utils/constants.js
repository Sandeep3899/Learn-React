export const LOGO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ1nH25GyCQmT-xYGqRc97lH4uVdroblEsA&s";

// Make it a function so you can't forget to append the id & extras.
export const MENU_API_URL = (id) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${encodeURIComponent(
    id
  )}&catalog_qa=undefined&submitAction=ENTER`;
