import "./personmenu.css"
import React, { useState } from 'react'
import { HiUserCircle } from 'react-icons/hi'
import { TiArrowSortedDown } from 'react-icons/ti'
import { CSSTransition } from 'react-transition-group'

const PersonMenu = () => {
    const [isEnter, setIsEnter] = useState(true)
    return (
        <CSSTransition
            in={isEnter}
            timeout={4000}
            appear={true}
            classNames="per"
        >
            <button onClick={() => { setIsEnter((v) => !v) }} className="UserSeetings flex items-center bg-white p-2 rounded-md ">
                {/* <img src="" alt="userImage" /> */}
                {/* <HiUserCircle className='mr-1 text-2xl  md:text-3xl' />
                <TiArrowSortedDown /> */}
                <p class="my-paragraph">{isEnter ? "Enter" : "Exit"}</p>
            </button>
        </CSSTransition>
    )
}

export default PersonMenu