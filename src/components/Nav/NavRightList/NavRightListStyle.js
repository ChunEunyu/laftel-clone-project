export const navRightListStyle = {
    base: 'max-lg:gap-4 lg:gap-5 flex',
    scrolled: 'max-lg:gap-4 lg:gap-5 flex'
};

export const searchBarStyle = {
    base: 'flex bg-[#fff] px-2 rounded-md transition duration-500 ease-in-out',
    searching: 'w-full flex bg-[#EFEFEF] px-2 rounded-md transition duration-500 ease-in-out'
}

export const searchIconStyle = {
    base: 'text-[#fff] pb-0 pt-0 cursor-pointer w-7 h-7 mt-1',
    scrolled: 'text-[#000] lg:hover:text-[#816bff] pb-0 pt-0 cursor-pointer w-7 h-7 mt-1',
    active: 'text-[#000] pb-0 pt-0 cursor-pointer w-4 h-4 mt-2 mr-2 transition duration-500 ease-in-out',
    searching: 'text-[#000] pb-0 pt-0 cursor-pointer w-5 h-5 mt-3 mx-2'
};

export const searchInputBarStyle = {
    base: 'text-sm font-semibold focus:outline-none',
    searching: 'text-sm bg-[#EFEFEF] h-12 font-semibold focus:outline-none',
}

export const authLinkStyle = {
    base: 'text-[#fff] max-lg:hidden pb-0 pt-0 mt-1 text-md text-opacity-80 no-underline font-bold tracking-tighter',
    scrolled: 'text-[#000] hover:text-[#816bff] max-lg:hidden pb-0 mt-1 pt-0 text-md text-opacity-80 no-underline font-bold tracking-tighter'
};

export const hamburgerIconStyle = {
    base: 'text-white lg:hidden pb-0 pt-0 mt-1.5 w-6 h-6 cursor-pointer',
    scrolled: 'text-black lg:hidden pb-0 pt-0  mt-1.5 w-6 h-6 cursor-pointer'
};
