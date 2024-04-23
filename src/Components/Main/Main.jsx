import "./Main.scss";
import usePlaylist from "../../hooks/usePlaylist";
import useRecentPlayed from "../../hooks/useRecentPlayed";
import { useNavigate } from "react-router-dom";
import Header from "./../Header/Header";
import useMadeForYou from "../../hooks/useMadeForYou";
import { MadeForYou, featuredPlaylists, recentPlayed } from "../../app/data";

const Main = () => {
  const playlist = usePlaylist();

  const MadeForYouData = useMadeForYou();

  const recentPlay = useRecentPlayed();
  // console.log(recentPlay)
  const navigate = useNavigate();

  return (
    <div className="Main ">
      <Header />
      <div className="  ">
        <div className=" pt-[24px] pb-[48px] px-[32px] space-y-9 -z-10 ">
          <div>
            <div className="flex justify-between items-end mb-[18px]">
              <div>
                <h2 className="text-2xl font-semibold hover:underline capitalize text-white ">
                  Top Mixes
                </h2>
              </div>
              <h2 className="uppercase text-[16px] tracking-widest font-semibold hover:underline text-[#b3b3b3] leading-6 ">
                See All
              </h2>
            </div>
            <div className="grid grid-cols-4  gap-5   max-md:grid-cols-2 max-lg:grid-cols-3 ">
              {playlist.slice(0, 4).map((item, index) => (
                <div
                  onClick={() =>
                    navigate(
                      `/tracks/${item.id}?URL=${featuredPlaylists}?tracks=${item?.tracks?.href}`
                    )
                  }
                  key={index}
                  className="card border hover:bg-[#272727]  w-full cursor-pointer max-md:w-full max-lg:w-full max-md:h-48 max-xl:w-full  max-xl:h-full max-lg:h-full shadow-white"
                >
                  <div>
                    <img
                      className="p-3 card-img"
                      src={item.images[0].url}
                      alt=""
                    />
                  </div>
                  <h2 className="text-white  font-semibold p-2  tracking-wide capitalize max-xl:p-3 max-md:p-3">
                    {item.name}
                  </h2>
                  <p className="text-white p-2 line-clamp-3 text-sm  max-md:hidden max-xl:hidden">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-end mb-[18px]">
              <div>
                <h2 className="text-2xl font-semibold hover:underline capitalize text-white">
                  Made for You
                </h2>
              </div>
              <h2 className="uppercase text-[16px] tracking-widest font-semibold hover:underline text-[#b3b3b3] leading-6">
                See All
              </h2>
            </div>
            <div className="grid grid-cols-4  gap-5   max-md:grid-cols-2 max-lg:grid-cols-3  ">
              {recentPlay.slice(0, 4).map((item, index) => (
                <div
                  onClick={() =>
                    navigate(
                      `/tracks/${item.id}?URL=${recentPlayed}?tracks=${item?.tracks?.href}`
                    )
                  }
                  key={index}
                  className="card border  w-full hover:bg-[#272727] cursor-pointer max-md:w-full max-lg:w-full  max-md:h-48 max-xl:w-full  max-xl:h-full max-lg:h-full shadow-white"
                >
                  <div className="  ">
                    <img
                      className="p-3 card-img      "
                      src={item.images[0].url}
                      alt=""
                    />
                  </div>
                  <h2 className="text-white  font-semibold p-2  tracking-wide capitalize max-xl:p-3 max-md:p-3">
                    {item.name}
                  </h2>
                  <p className="text-white p-2 line-clamp-3 text-sm  max-md:hidden max-xl:hidden">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-end mb-[18px]">
              <div>
                <h2 className="text-2xl font-semibold hover:underline capitalize text-white">
                  Recent Played
                </h2>
              </div>
              <h2 className="uppercase text-[16px] tracking-widest font-semibold hover:underline text-[#b3b3b3] leading-6">
                See All
              </h2>
            </div>
            <div className="grid grid-cols-4  gap-5   max-md:grid-cols-2 max-lg:grid-cols-3 ">
              {MadeForYouData.slice(0, 4).map((item, index) => (
                <div
                  onClick={() =>
                    navigate(
                      `/tracks/${item.id}?URL=${MadeForYou}?tracks=${item?.tracks?.href}`
                    )
                  }
                  key={index}
                  className="card border  w-full cursor-pointer max-md:w-full max-lg:w-full max-md:h-48 max-xl:w-full  max-xl:h-full max-lg:h-full shadow-white"
                >
                  <div>
                    <img
                      className="p-3 card-img"
                      src={item.images[0].url}
                      alt=""
                    />
                  </div>
                  <h2 className="text-white  font-semibold p-2  tracking-wide capitalize max-xl:p-3 max-md:p-3">
                    {item.name}
                  </h2>
                  <p className="text-white p-2 line-clamp-3 text-sm  max-md:hidden max-xl:hidden">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
