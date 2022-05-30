import { useEffect, useState} from "react";
import "./BodyStyles.css";
import Cat from "./Cat/Cat";

const Body = () => {
  const [charlist, setCharList] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=15"
    );
    setCharList(await response.json());
  };

  

  let catsList = charlist.map((item, i) => {
    const { id, url } = item;
    return (
      <div
        key={id}
        className="item-block"
      >
        <Cat url={url} id={id} index={i}/>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="container">{catsList}</div>
      <button className="btn">...загружаем еще котиков...</button>
    </div>
  );
};

export default Body;
