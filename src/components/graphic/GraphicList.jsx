import { useEffect, useState } from "react";
import GraphicItem from './GraphicItem';

const GraphicList = () => {
  const [graphic, setGraphic] = useState();
  const getData = () => {
    fetch("/api/graphic.json")
      .then((response) => response.json())
      .then((data) => setGraphic(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(graphic, "frontend");
  return (
    <div className="flex gap-10 justify-center flex-wrap mt-10">
      {graphic?.map((item) => {
        return <GraphicItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default GraphicList;