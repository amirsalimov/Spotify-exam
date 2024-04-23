import { useEffect, useState } from "react";

const useTracks = (playlistId) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch playlist tracks");
        }

        const data = await response.json();
        setTracks(data.tracks.items);
      } catch (error) {
        console.error("Error fetching playlist tracks:", error);
      }
    };

    if (playlistId) {
      fetchTracks();
    }
  }, [playlistId]);

  return tracks;
};

export default useTracks;
