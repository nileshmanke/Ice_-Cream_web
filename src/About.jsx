import React from "react";

const About = () => {
  return (
    <div>
      <div className="">
        <div class=" bg-[url('src/About/image/Newlastbgimg.jpg')]  p-20 sm:p-3  w-[1000px] border-b-2 ">
          <h1 className=" text-center font-bold text-white  text-3xl ">
            Our accomplishments are a result of hard work, team spirit and
            determination
          </h1>
        </div>

        <div className=" grid grid-flow-row sm:w-">
          <div className=" p-20 sm:p-3 w-full rounded-t-3xl border-b-2 border-blue-800">
            <img src="src/About/image/img.png" alt="" />
          </div>
          <div className=" text-center pt-36  font-serif object-fill">
            <h4 className=" font-bold text-blue-950 text-2xl">
              Winter flavors
            </h4>
            <h1 className=" font-bold text-3xl text-blue-950">
              Peppermintybr <br />
              candy-caney <br />
              crunchy bliss
            </h1>
            <p className=" text-blue-950">
              This way to something special for those chilly winter months.
            </p>
          </div>
          <div className=" p-20 sm:p-3  w-[1000px] border-b-2 border-blue-800">
            <img src="src/About/image/img.png" alt="" />
          </div>

        </div>

        <div className="pt-4 gap-20  flex-row  grid grid-cols-1 sm:grid-cols-2 ">
          <div className=" p-20 sm:p-3  w-[1000px] border-b-2">
            <h4 className=" text-center font-bold text-2xl  pb-8 text-blue-950 ">
              Nutrition center
            </h4>
            <h1 className=" text-center text-blue-950 font-bold text-5xl">
              Keep it cool. <br />
              Keep it in <br />
              moderation.
            </h1>
            <p className=" text-center text-blue-950 text-2xl">
              Learn all the ins and outs about eating ice cream in moderation.
            </p>
          </div>
          <div className="p-20 sm:p-3  w-[1000px] border-b-2 border-blue-800">
            <img  src="src/About/image/img_4.jpg" alt="" />
          </div>
        </div>


        <div className=" grid grid-cols-4 gap-3  sm:p-3  w-[1000px]  p-10 ">
          <img className=" hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-300" src="src/About/image/lastimg_1.png" alt="" />
          <img className=" hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-300"  src="src/About/image/lastimg_2.png" alt="" />
          <img  className=" hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-300" src="src/About/image/lastimp_3.png" alt="" />
          <img className=" hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl hover:bg-amber-300" src="src/About/image/lastimg_4.png" alt="" />
        </div>
        <div className=" bg-slate-500 sm:p-3  w-[1000px] border-b-2  ">
          <h1 className=" text-white text-3xl text-center pt-2 font-bold">
            {" "}
            We want to thank you for helping us making our products better and
            better
          </h1>

          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                See BeTheme in action{" "}
              </svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default About;
