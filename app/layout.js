import "./globals.css";
import SideBar from "@/components/SideBar";
import BottomBar from "@/components/BottomBar";

export const metadata = {
  title: "Spotify",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" flex flex-col justify-between ">
        <div className=" flex">
          <SideBar />
          {children}
        </div>
        <BottomBar />
      </body>
    </html>
  );
}
