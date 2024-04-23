import { Bell, ChevronLeft, ChevronRight, Link } from "lucide-react";
import like from "../../assets/images/Heart_Fill_XS.svg";
import useLikeStore from "../../app/like/LikeSlice";

const LikedSongs = () => {
  const { likes, addLike, removeLike } = useLikeStore((state) => state);
  function formatDuration(duration_ms) {
    const duration_s = duration_ms / 1000;

    const minutes = Math.floor(duration_s / 60);
    const seconds = Math.floor(duration_s % 60);

    const formatted_seconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formatted_seconds}`;
  }
  return (
    <div>
      <header className="text-black py-3 bg-gradient-to-b from-indigo-800  pt-3 px-5 pb-20  ">
        <div className="top flex justify-between sticky top-0 z-20 max-md:hidden bg-inherit w-full ">
          <div className="left flex items-center gap-3  ">
            <button className="bg-zinc-800 p-1 flex justify-center items-center transition-all rounded-full hover:scale-110">
              <ChevronLeft color="white" className="mx-auto" size={26} />
            </button>
            <button className="bg-zinc-800 p-1 flex justify-center items-center transition-all rounded-full hover:scale-110">
              <ChevronRight color="white" className="mx-auto" size={26} />
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
        <button className=" xl:hidden lg:hidden md:hidden"> back</button>
      </header>
      <div className="px-5 mt-10  ">
        {likes.length > 0 ? (
          likes?.map((item, i) => (
            <div
              key={i}
              className="text-white flex items-center  justify-between p-2"
            >
              <img src={item.images[0]?.url} alt="" />
              <div>
                <p>{item.name}</p>
              </div>
              <div className="flex -mt-7">
                <span className="text-white">{item.name}</span>
              </div>
              <div className="actions -mt-7 cursor-pointer ">
                <img onClick={() => removeLike(item.id)} src={like} alt="" />
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-white">You don`t have any liked songs yet</h1>
        )}
      </div>
    </div>
  );
};

export default LikedSongs;
