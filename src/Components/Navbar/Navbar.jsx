import './navbar.css'
import 'animate.css'
import { HiUserCircle } from 'react-icons/hi'
import { TiArrowSortedDown } from "react-icons/ti"
import PersonMenu from '../SubComponents/PersonMenu/PersonMenu'

function Navbar() {
    return (
        <>
            <header className='Header fixed w-full '>
                <nav className='w-full px-3 py-4 md:px-32 flex justify-between items-center'>
                    <div className="Logo h-full">
                        {/* <img src="" alt="Logo" /> */}
                        <h2 className='text-white text-center animate__animated animate__bounce animate__delay-1s'>LOGO</h2>
                    </div>
                    <ul className='md:flex md:tems-center h:full hidden '>
                        <li className='mr-14' ><a className='text-white' href="/">Home</a></li>
                        <li className='' ><a className='text-white' href="/blogs">Blogs</a></li>
                    </ul>
                    <PersonMenu />
                </nav>
            </header>
        </>
    )
}

export default Navbar