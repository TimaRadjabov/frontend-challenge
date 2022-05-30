import React, { useRef, useState } from "react";
import { StoreContext } from "../../../App";
import activeHeard from "../1.png";
import passiveHeard from "../2.png";
import "./CatStyles.css";

const Cat = ({ url, id, i, liked }) => {
  const itemRefs = useRef([]);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(liked);

  const { addFavoriteCat, removeFavoriteCat } = React.useContext(StoreContext);

  const onAddFavotires = () => {
    addFavoriteCat({
      url,
      id,
    });
  };
  

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("cats-item_selected")
    );
    itemRefs.current[id].classList.add("cats-item_selected");
  };
  const blurOnItem = (id) => {
    itemRefs.current[id].classList.remove("cats-item_selected");
  };

  const onClickHeard = (id) => {
    setActive(!active);
    !active ? onAddFavotires() : removeFavoriteCat(id);

  };
  

  return (
    <>
      <img
        className="cats-item"
        src={url}
        alt={id}
        tabIndex={0}
        ref={(el) => (itemRefs.current[i] = el)}
        onMouseEnter={() => {
          focusOnItem(i);
          setFocused(true);
        }}
        onMouseLeave={() => {
          blurOnItem(i);
          setFocused(false);
        }}
      />
      {focused ? (
        <img
          tabIndex={0}
          src={active || hovered ? activeHeard : passiveHeard}
          alt="heard"
          className="heard"
          onClick={() => {
            onClickHeard(id);
          }}
          onMouseEnter={() => {
            focusOnItem(i);
            setFocused(true);
            setHovered(true);
          }}
          onMouseLeave={() => {
            blurOnItem(i);
            setFocused(false);
            setHovered(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Cat;
