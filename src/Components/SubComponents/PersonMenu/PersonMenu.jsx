import "./personmenu.css"
import 'animate.css';
import React, { useState } from 'react'
import { HiUserCircle } from 'react-icons/hi'
import { TiArrowSortedDown } from 'react-icons/ti'
import { CSSTransition } from 'react-transition-group'

const PersonMenu = () => {
    const [isEnter, setIsEnter] = useState(false)
    return (
        <button onClick={() => { setIsEnter((v) => !v) }} className="UserSeetings flex items-center justify-center bg-white p-2 rounded-md ">
            {/* <img src="" alt="userImage" /> */}
            <HiUserCircle className=' text-2xl  md:text-3xl w-10' />
            <CSSTransition
                in={!isEnter}
                timeout={0}
                appear={true}
                classNames="logo"
            >
                 <TiArrowSortedDown className="my-logo" />
            {/* <p className="my-paragraph">Hiii</p> */}
            </CSSTransition>
            <CSSTransition
                in={isEnter}
                timeout={0}
                // appear={true}
                classNames="per"
            >
                {/* {isEnter ? <p class="my-paragraph"> time thei uial</p> : <TiArrowSortedDown className="my-paragraph" />} */}
            <p className="my-paragraph">Hiii</p>
            </CSSTransition>
            {/* <p className="my-para w-full animate__animated animate__rubberBand">Hiii this</p> */}

        </button>
    )
}

export default PersonMenu