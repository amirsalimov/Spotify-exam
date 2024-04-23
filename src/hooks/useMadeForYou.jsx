import { useEffect, useState } from "react";
import { MadeForYou } from "../app/data";

const useMadeForYou = () => {
  const [madeForYou, setMadeForYou] = useState([]);
  useEffect(() => {
    const getPlaylists = async () => {
      await fetch(MadeForYou, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMadeForYou(data.playlists.items);
        })
        .catch((err) => console.log(err));
    };
    getPlaylists();
  }, []);

  return madeForYou;
};

export default useMadeForYou;
