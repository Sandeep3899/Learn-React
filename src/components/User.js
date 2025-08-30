import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //Api calls
  }, []);

  async function getUserInfo() {
    const data = await fetch(`https://api.example.com/users/${name}`);
  }

  return (
    <div className="user-card">
      <h1> Count: {count} </h1>
      <h1> Count2: {count2} </h1>
      <h2>User Name: {name}</h2>
      <h3>Age: 30</h3>
      <p>Email: sandep.yeruva@gmail.com</p>
    </div>
  );
};
export default User;
