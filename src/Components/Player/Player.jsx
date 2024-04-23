import { useContext, useEffect, useState } from "react";
import "./Player.scss";
import { Audioprovider } from "../../context";
const Player = () => {
  const { audio, setAudio } = useContext(Audioprovider);
  const [auduoURl, setauduoURl] = useState(null);

  useEffect(() => {
    const music = JSON.parse(localStorage.getItem("music")) || "";
    setauduoURl(music?.track?.preview_url);
  }, [audio]);

  return (
    <div className="Player flex justify-center items-center">
      <audio
        src={auduoURl}
        type="audio/mp3"
        className="w-full"
        controls
      ></audio>
    </div>
  );
};

export default Player;
