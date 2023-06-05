import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";

const Menu = () => {
  return (
    <nav>
      <ul className=" flex flex-col">
        <li className=" px-2">
          <a
            href="/"
            className=" h-10 flex items-center text-sm font-semibold gap-x-4   text-white hover:text-white px-4 bg-active rounded"
          >
            <span>
              <AiFillHome className="w-6 h-6" />
            </span>
            Anasayfa
          </a>
        </li>
        <li className=" px-2">
          <a
            href="/search"
            className=" h-10 flex items-center text-sm font-semibold gap-x-4 rounded text-link   hover:text-white px-4"
          >
            <span>
              <BsSearch className="w-6 h-6" />
            </span>
            Ara
          </a>
        </li>
        <li className=" px-2">
          <a
            href="/library"
            className=" h-10 flex items-center text-sm font-semibold gap-x-4 text-link rounded  hover:text-white px-4    "
          >
            <span>
              <BiLibrary className="w-6 h-6" />
            </span>
            Kitaplığın
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
