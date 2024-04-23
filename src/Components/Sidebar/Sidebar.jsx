import { Link } from "react-router-dom";
import spotify from "../../assets/images/Spotify_Logo_RGB_White.png";
import homeicon from "../../assets/images/Home_S.png";
import searchicon from "../../assets/images/Search_S.png";
import libraryicon from "../../assets/images/Library_S.png";
import addToLibraryicon from "../../assets/images/+Library_S.png";
import likedSongs from "../../assets/images/Liked Songs_S.png";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar bg-black  w-[256px] h-screen text-[#b2b2b2] max-lg:hidden max-sm:hidden flex flex-col sticky top-0 ">
      <div className="text-white inline-block my-6 px-6 w-full">
        <img src={spotify} alt="" className="w-[130px]" />
      </div>

      <nav>
        <Link
          to="/"
          className="flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded"
        >
          <img src={homeicon} alt="" />
          <span className="ml-4 text-sm font-semibold ">Home</span>
        </Link>
        <Link
          to="/"
          className="flex items-center hover:text-white  mx-2 px-4 py-2 rounded duration-300"
        >
          <img src={searchicon} alt="" />
          <span className="ml-4 text-sm font-semibold ">Search</span>
        </Link>
        <div className="flex items-center hover:text-white  mx-2 px-4 py-2 rounded duration-300 mb-6">
          <img src={libraryicon} alt="" />
          <span className="ml-4 text-sm font-semibold ">Your Library</span>
        </div>
        <div className="flex items-center hover:text-white  mx-2 px-4 py-2 rounded duration-300">
          <img src={addToLibraryicon} alt="" />
          <span className="ml-4 text-sm font-semibold ">Create Playlist </span>
        </div>
        <Link
          to="likedSongs"
          className="flex items-center hover:text-white  mx-2 px-4 py-2 rounded duration-300"
        >
          <img src={likedSongs} alt="" />
          <span className="ml-4 text-sm font-semibold ">Liked songs</span>
        </Link>
      </nav>
      <div className="hr"></div>
      <footer className="mt-auto mb-4 ml-6 ">
        <ul>
          <li>
            <h3 className="hover:underline py-2">Chill Mix</h3>
          </li>
          <li>
            <h3 className=" hover:underline py-2">Insta Hits</h3>
          </li>
          <li>
            <h3 className=" hover:underline py-2">Your Top songs 2021 </h3>
          </li>
          <li>
            <h3 className=" hover:underline py-2">Mellow Songs</h3>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Sidebar;
