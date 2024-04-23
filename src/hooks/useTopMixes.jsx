import { useEffect, useState } from "react";
import { topMixesPlaylists } from "../app/data";

const useTopMixes = () => {
  const [topMixes, setTopMixes] = useState([]);
  useEffect(() => {
    const getTopMixes = async () => {
      await fetch(topMixesPlaylists, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTopMixes(data.playlists.items);
        })
        .catch((err) => console.log(err));
    };
    getTopMixes();
  }, []);

  return topMixes;
};

export default useTopMixes;
