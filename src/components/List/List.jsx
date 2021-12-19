import React, { useContext, useEffect } from "react";
import { videosContext } from "../../contexts/videosContext";
import Card from "../Card/Card";

const List = () => {
  const { getVideos, videos } = useContext(videosContext);
  useEffect(() => {
    getVideos();
  }, []);
  console.log("from list", videos);
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {videos.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
