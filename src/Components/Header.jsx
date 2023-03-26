import React from 'react'
//import { FcNightPortrait } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";
//import { BsFillCartCheckFill } from "react-icons/bs";

import { GiUsaFlag } from "react-icons/gi";
import { AiFillBell } from "react-icons/ai";
import Profile from '../ProfileImage.png'

const Header = () => {
    return (
        <div>
            <div class="d-flex">
                <div class="d-flex align-items-center " id="navbar"> </div>
                <div id="navbar2" class="d-flex justify-content-end pe-4">
                    <span class="far fa-user-circle "><span className='px-5'><GiUsaFlag /></span>
                        <span className='px-3'><AiFillBell /></span>
                        <span className='px-3'><BsFillPersonFill /></span>
                        <span className='px-3'><img
                            src={Profile}
                            className="rounded-circle"
                            alt="Avatar" style={{ hight: "40px", width: "40px" }}
                        /></span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Header