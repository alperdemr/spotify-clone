import React from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import Menu from "./SideBar/Menu";
import Link from "next/link";
import { AiFillPlusSquare, AiFillHeart } from "react-icons/ai";
import Playlist from "./SideBar/Playlist";

const SideBar = () => {
  return (
    <aside className=" w-60 pt-6  flex-col bg-black wrapper   ">
      <Link href="#" className=" mb-5">
        <Image src={logo} alt="spotify" className="h-10 px-6 " />
      </Link>
      <Menu />
      <nav className=" mt-6">
        <ul>
          <li className=" py-2 px-6 flex">
            <a href="" className=" group text-sm text-link flex items-center justify-center font-semibold hover:text-white">
              <span>
                <AiFillPlusSquare className="w-7 h-7 mr-4" />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li className=" py-2 px-6 flex">
            <a href="" className=" group text-sm text-link flex items-center justify-center font-semibold  hover:text-white">
              <span>
                <AiFillHeart className="w-7 h-7 mr-4" />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlist />
    </aside>
  );
};

export default SideBar;
