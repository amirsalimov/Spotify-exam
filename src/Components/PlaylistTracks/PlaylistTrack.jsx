import useTracks from "./../../hooks/useTracks";
import { Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import unlike from "../../assets/images/Heart_Fill_XSS.svg";
import like from "../../assets/images/Heart_Fill_XS.svg";
import "./PlaylistTracks.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { getPlaylists, getToken } from "../../hooks/playlist";
import useLikeStore from "../../app/like/LikeSlice";
import { Audioprovider } from "../../context";
const PlaylistTrack = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const tokenURl = "https://accounts.spotify.com/api/token";
  const url = window.location.href;
  const Api = url.toString().split("?URL=")[1];
  const tracksURl = url.split("?tracks=")[1];
  const [trackData, setTrackData] = useState(null);
  const { likes, addLike, removeLike } = useLikeStore((state) => state);
  const { audio, setAudio } = useContext(Audioprovider);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        await getPlaylists(Api).then((res) => {
          setData(res?.playlists?.items);
        });
        await getPlaylists(tracksURl).then((res) => {
          setTrackData(res?.items);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  function formatDuration(duration_ms) {
    const duration_s = duration_ms / 1000;

    const minutes = Math.floor(duration_s / 60);
    const seconds = Math.floor(duration_s % 60);

    const formatted_seconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formatted_seconds}`;
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = (item) => {
    localStorage.setItem("music", JSON.stringify(item));
    setAudio(item);
  };

  return (
    <>
      {data?.map((selectedPlaylist, i) => {
        if (selectedPlaylist?.id === id) {
          return (
            <div key={i}>
              <header
                style={{
                  backgroundColor: selectedPlaylist.primary_color || "green",
                }}
                className="text-black py-3  pt-3 px-5 pb-20  "
              >
                <div className="top flex justify-between sticky top-0 z-20 max-md:hidden bg-inherit w-full ">
                  <div className="left flex items-center gap-3  ">
                    <button className="bg-zinc-800 p-1 flex justify-center items-center transition-all rounded-full hover:scale-110">
                      <ChevronLeft
                        color="white"
                        className="mx-auto"
                        size={26}
                      />
                    </button>
                    <button className="bg-zinc-800 p-1 flex justify-center items-center transition-all rounded-full hover:scale-110">
                      <ChevronRight
                        color="white"
                        className="mx-auto"
                        size={26}
                      />
                    </button>
                  </div>
                  <div className="right flex items-center gap-4">
                    <button className="bg-white text-black px-3 py-1 rounded-2xl font-semibold transition-all hover:scale-105">
                      Explore Premium
                    </button>
                    <button className="bg-black text-white px-3 py-1 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-download"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Install App
                    </button>
                    <Link
                      to={"/"}
                      className="bg-zinc-800 p-1.5 flex justify-center items-center transition-all rounded-full hover:scale-110 hover:text-white"
                    >
                      <Bell size={24} />
                    </Link>
                  </div>
                </div>
                <button className=" xl:hidden lg:hidden md:hidden">
                  {" "}
                  <i className="fa-solid fa-arrow-left fa-xl"></i>
                </button>
                <div className="mt-6 flex gap-4">
                  <div>
                    <img
                      className="max-md:p-2 max-md:w-1/2"
                      src={selectedPlaylist.images[0].url}
                      alt=""
                    />
                  </div>
                  <div className="p-4 ">
                    <h3>Public playlist</h3>
                    <h1 className="name">{selectedPlaylist.name}</h1>
                  </div>
                </div>
                <button
                  className={`like ${(() => {
                    const likedItems =
                      JSON.parse(localStorage.getItem("likes")) || [];
                    const isLiked = likedItems.some(
                      (item) => item?.id === selectedPlaylist?.id
                    );
                    return isLiked ? "liked" : "";
                  })()}`}
                  onClick={() => {
                    const likedItems =
                      JSON.parse(localStorage.getItem("likes")) || [];
                    const isLiked = likedItems.some(
                      (item) => item?.id === selectedPlaylist?.id
                    );
                    if (isLiked) {
                      removeLike(selectedPlaylist?.id);
                    } else {
                      addLike(selectedPlaylist);
                    }
                  }}
                >
                  {
                    <img
                      src={(() => {
                        const likedItems =
                          JSON.parse(localStorage.getItem("likes")) || [];
                        const isLiked = likedItems.some(
                          (item) => item?.id === selectedPlaylist?.id
                        );
                        return isLiked ? like : unlike;
                      })()}
                    />
                  }
                </button>
              </header>

              <div>
                {trackData?.map((track, index) => (
                  <div
                    className="flex w-full items-center gap-4 p-3"
                    key={index}
                  >
                    <img
                      className="cursor-pointer"
                      onClick={() => togglePlay(track)}
                      src={track.track.album.images[2].url}
                      alt=""
                    />
                    <div className="text-white ">
                      <h3>
                        {track.track.name} -{" "}
                        {track.track.artists
                          .map((artist) => artist.name)
                          .join(", ")}
                      </h3>
                      <audio ref={audioRef}>
                        <source
                          src={track.track.preview_url}
                          type="audio/mpeg"
                        />
                      </audio>
                    </div>

                    {track?.track?.explicit ? (
                      <div className="">
                        <img
                          className="cursor-pointer "
                          onClick={() => removeFromLike(track.track.id)}
                          src={like}
                          alt=""
                        />
                      </div>
                    ) : (
                      <img
                        className="cursor-pointer"
                        onClick={() => addToLikeCartt(track.track)}
                        src={unlike}
                        alt=""
                      />
                    )}
                    <span style={{ color: "white" }}>
                      {formatDuration(track.track.duration_ms)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default PlaylistTrack;
