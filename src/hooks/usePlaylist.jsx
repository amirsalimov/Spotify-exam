import { useEffect } from "react";
import { useState } from "react";
import { featuredPlaylists as url } from "../app/data";

const usePlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    const getPlaylists = async () => {
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlaylist(data.playlists.items);
        })
        .catch((err) => console.log(err));
    };
    getPlaylists();
  }, []);

  return playlist;
};

export default usePlaylist;
