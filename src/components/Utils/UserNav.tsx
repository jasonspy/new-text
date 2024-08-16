import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';





function UserNav() {



    const [dropdown, setDropdown] = useState(false)
    const mobileNav = useRef<HTMLDivElement>(null)
    const trigger = useRef<HTMLDivElement>(null)




    const [isModalOpen, setModalState] = useState(false);

    const handleClose = () => {
        setModalState(false)
    }

    const [isChecked, setIsChecked] = useState(false)




    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (!dropdown || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setDropdown(false)
        };
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })




    return (
        <div className="relative group md:hidden lg:block">
            <ul className="flex flex-col gap-2 max-w-[80px] mx-auto">

                <div
                    ref={trigger}
                    onClick={() => setDropdown(!dropdown)}
                    className="flex items-center justify-between gap-2 font-medium  hover:cursor-pointer">

                    <span className="p-2.5 px-3  text-sm font-medium text-white rounded-lg cursor-pointer">
                        <svg className='w-5 h-5' viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00195 21H29.002M1.00195 11H29.002M1.00195 1H29.002" stroke="#8F8F8F" strokeWidth="1.3621" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
                {dropdown && <div ref={mobileNav} className="px-4 pb-4  absolute right-0 top-16 w-60 border rounded-lg  z-50" style={{ backgroundColor: '#fff' }}>

                    <div className="flex flex-col items-start gap-4 w-fit mt-4">
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/'}>Home </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/css-mobile'}>myCSSApp </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/coming-soon'}>CSS Mobile </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/css-fibre'}>CSS Fiber </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/about'}>About </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/contact'}>Contact  </Link>
                        <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Self Service  </Link>
                    </div>
                 

                </div>}


            </ul>

        </div >



    );
}

export default UserNav;
