import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <h1 className="text-green-600  sm:text-center text-3xl font-bold  mb-6">
        Blog
      </h1>
      <p className=" sm:text-center   underline underline-offset-2 text-1xl mb-5">
        All Blogs
      </p>

      <div className=" grid grid-cols-1 sm:grid sm:grid-cols-3 gap-8">
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400" >
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Gajar-Halwa-Blog-7.jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            CHERRY BERRY ICE CREAM AS A SIGNATURE CHRISTMAS TREAT
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400" >
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Spreading-Christmas-Blog-2.jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            GAJAR HALWA DESSERT: FESTIVE TREATS FOR MERRY CHRISTMAS
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400" >
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Friday-Funday-Flavour-Blog-5.jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            SPREADING CHRISTMAS CHEER WITH NATURALS
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400" >
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Naturals-post.jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            FRIDAY FUNDAY FLAVOUR, A NEW FLAVOUR EVERY FRIDAY
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400" >
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Cherry-Berry-Blog-4.jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            PERSIAN DELIGHT ICE CREAM: A CHRISTMAS GIFT FROM THE HEART
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400">
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Prasadam-Ice-Cream.png"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            CELEBRATE GANESH CHATURTHI WITH NATURALS PRASADAM ICE CREAM
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400">
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Strawberry-Blog-6 (1).jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            THE STORY BEHIND THE SUCCESS OF NATURALS ICE CREAM
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400">
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Persian-Delight.jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            WHAT MAKES NATURALS ICECREAM ORIGINAL?
          </p>
        </div>

        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400">
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Blog-05.jpg"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            INGREDIENTS USED IN NATURALS ICE CREAM
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400">
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Ingredients.png"
            alt=""
          />
          <p className="mt-4 hover:underline hover:font-serif underline-offset-auto">
            PERSIAN DELIGHT ICE CREAM: A CHRISTMAS GIFT FROM THE HEART
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400">
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/10-Best-Flavours-02.png"
            alt=""
          />
          <p className="mt-4 hover:underline  hover:font-serif underline-offset-auto">
            IS NATURALS ICECREAM MADE OF REAL FRUITS?
          </p>
        </div>
        <div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-400">
          <img
            className="rounded border-2 border-blue-400 border-double"
            src="src/assets/images/Blog-07-1 (1).jpg"
            alt=""
          />
          <p className="mt-4 hover:underline  hover:font-serif underline-offset-auto">
            TOP 10 BEST FLAVOURS OF NATURALS ICE CREAM YOU SHOULD TRY
          </p>
        </div>
        {/* <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/> */}
      </div>
    </>
  );
};

export default Blog;
