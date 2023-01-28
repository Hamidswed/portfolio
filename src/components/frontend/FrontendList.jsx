import { useEffect, useState } from "react";
import FrontendItem from "./FrontendItem";

const FrontendList = () => {
  const [frontend, setFrontend] = useState();
  const getData = () => {
    fetch("/api/frontend.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFrontend(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(frontend);
  return (
    <div>
      <FrontendItem />
    </div>
  );
};
export default FrontendList;
