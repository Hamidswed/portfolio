import { useEffect, useState } from "react";
import FrontendItem from "./FrontendItem";

const FrontendList = () => {
  const [frontend, setFrontend] = useState();
  const getData = () => {
    fetch("/api/frontend.json")
      .then((response) => response.json())
      .then((data) => setFrontend(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(frontend, "frontend");
  return (
    <div className="flex flex-col gap-10 mt-10">
      {frontend?.map((item) => {
        return <FrontendItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default FrontendList;
