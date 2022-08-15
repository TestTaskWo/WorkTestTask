import React, { useState } from "react";

export const Counter = () => {
  const [likes, setLikes] = useState(5);

  return (
    <div>
      <h2>{likes}</h2>
      <button onClick={() => setLikes(likes + 1)}>Inc</button>
      <button onClick={() => setLikes(likes - 1)}>Dec</button>
    </div>
  );
};

export default Counter;
