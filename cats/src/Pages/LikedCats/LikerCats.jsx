import React from "react";
import { StoreContext } from "../../App";
import Cat from "../Body/Cat/Cat";

const LikedCats = () => {
  const { favorited } = React.useContext(StoreContext);
 

  let favoriteCats = favorited.map((item) => {
    const { id, url } = item;
    return (
      <div key={id} className="item-block">
        <Cat url={url} id={id} liked={true} />
      </div>
    );
  });

  return (
    <div>
      <div className="main">
        <div className="container">{favoriteCats}</div>
      </div>
    </div>
  );
};

export default LikedCats;
