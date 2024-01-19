import React from 'react'

const SubProducts = () => {
  return (
    <div className='w-2/12 h-[200px] bg-slate-400 z-10 fixed top-36 right-10 subproducts'>

        <div>
            <ul className='flex flex-col font-semibold justify-between gap-3 ml-2  '>
                <a href='https://www.google.com/' target='_blank'><li>Family Pack</li></a>
                <a href='https://www.google.com/' target='_blank'><li>Cones</li></a>
                <a href='https://www.google.com/' target='_blank'><li>Festival Special</li></a>
                <a href='https://www.google.com/' target='_blank'><li>Combo Offers</li></a>
            </ul>

        </div>
    </div>
  )
}

export default SubProducts