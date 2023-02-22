import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
import Suggestions from "@/components/Suggestions";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
          <div className="md:hidden sticky top-0 bg-white">
            <Header />
          </div>
          <div className="flex">
            <div className="hidden md:flex overflow-hidden fixed">
              <Sidebar />
            </div>
            {/* <Post /> */}
            <div className="w-full md:max-w-xl mx-auto lg:max-w-3xl xl:max-w-4xl flex">
              <div className="lg:w-2/3 w-full">
                <Posts />
              </div>
              <div className="hidden lg:flex">
                <Suggestions />
              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
        {/* Header */}
        {/* Feed */}
        {/* Sidebar */}
        {/* Post */}
        {/* Suggesions */}
      </body>
    </html>
  );
}
