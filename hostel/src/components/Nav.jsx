import React from 'react'
import Picture1 from '../assets/Picture1.png';
import { IoMenuSharp } from "react-icons/io5";


function Nav() {
  return (
    <div className='bg-black flex justify-between h-20'>
        <div className='flex space-x-0 h-2'>
          <img className="h-20 m-1 w-20  lg:w-28 " src={Picture1}/>
          <span className='pt-6 text-xl lg:text-4xl text-white font-bold items-center'>TEAM VIDYUTASHWA</span>
        </div>
        <div>
          <IoMenuSharp />
        </div>
        <div className='hidden lg:flex p-4 items-center text-xl text-white space-x-20'>
          <ul> <a className='hover:text-2xl' href="/">Home</a></ul>
          <ul> <a className='hover:text-2xl' href="/">Team</a></ul>
          <ul> <a className='hover:text-2xl' href="/">Achievements</a></ul>
          <ul> <a className='hover:text-2xl' href="/">Parteners</a></ul>
          <ul> <a className='hover:text-2xl bg-orange-600 border-white rounded-2xl p-2' href="/">Contact</a></ul>

        </div>

    </div>
  )
}

export default Nav