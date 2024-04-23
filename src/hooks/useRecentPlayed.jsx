import { useEffect, useState } from "react";
import { recentPlayed } from "../app/data";

const useRecentPlayed = () => {
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    const getTopMixes = async () => {
      await fetch(recentPlayed, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRecent(data.playlists.items);
        })
        .catch((err) => console.log(err));
    };
    getTopMixes();
  }, []);

  return recent;
};

export default useRecentPlayed;
