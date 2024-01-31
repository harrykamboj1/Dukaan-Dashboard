import speaker from "../assets/Dashboard/Icons/speaker.png";
import menu from "../assets/Dashboard/Icons/Menu.png";

const NavBar = ({ onToggleSidebar }) => {
  return (
    <div className=" flex justify-between items-center sm:gap-4  gap-2 sm:px-8 px-4 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#FFFFFF] ">
      <div className="flex gap-2 sm:gap-4 items-center sm:flex-grow">
        <button className="block lg:hidden" onClick={onToggleSidebar}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-2xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
          </svg>
        </button>
        <h5 className="text-[#1A181E] font-medium text-xl">Payouts</h5>
        <div className="flex items-center gap-[6px] text-[#4D4D4D]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-sm"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
          </svg>
          <p className="hidden sm:block text-xs">How it works</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-[140px] bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-lg"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="flex gap-2 justify-end sm:flex-grow">
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex w-8 sm:w-10 sm:h-10 items-center justify-center">
          <img
            alt="speaker logo"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            srcSet={speaker}
            src={speaker}
          />
        </button>
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center">
          <img
            alt="menu logo"
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            srcSet={menu}
            src={menu}
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
