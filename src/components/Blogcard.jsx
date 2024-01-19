import React from 'react'

const Blogcard = () => {
  return (
    <div>
<div className="hover:translate-y-5 transform ease-in-out duration-1000 shadow-2xl p-7   hover:bg-amber-400 " >
          <img
            className=" border-2 border-blue-400 border-double hover:rounded-full ease-in-out transform duration-1000"
            src="https://cdn.pixabay.com/photo/2017/06/02/18/44/ice-2367072_1280.jpg"
            alt=""
          />
          <p className="mt-4 p-6 hover:underline hover:font-serif underline-offset-auto">
            CHERRY BERRY ICE CREAM AS A SIGNATURE CHRISTMAS TREAT
          </p>
        </div>



    </div>
  )
}

export default Blogcard