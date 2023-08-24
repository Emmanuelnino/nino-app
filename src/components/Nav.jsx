import { useState } from 'react';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <div className='sticky top-0 z-50'>
            <header className="header flex justify-between md:px-10 px-5 bg-zinc-800 text-white py-4 md:py-5 items-center font-serif">
                <a href="/" className="flex font-bold text-xl items-center gap-1">
                    <img src='data:image/jpeg;base64,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'
                    />      <span className="md:flex hidden">Stone</span>
                    <span className="md:flex hidden text-green-400">WreckOdds</span>
                </a>


                {/* Mobile Nav */}
                <nav
                    className={`${isNavOpen ? 'fixed' : 'hidden'
                        } top-0 left-0 h-full w-full bg-zinc-800 p-6 text-white flex flex-col items-center justify-center md:hidden`}
                >
                    <button onClick={toggleNav} className='absolute top-6 right-4'>
                        <svg
                            viewBox="0 0 470 1000"
                            fill="currentColor"
                            height="1.9em"
                            width="1.9em"
                        >
                            <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
                        </svg>
                    </button>
                    <a
                        href="/"
                        className="nav-link text-2xl mb-4 hover:text-green-400"
                        onClick={toggleNav}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="nav-link text-2xl mb-4 hover:text-green-400"
                        onClick={toggleNav}
                    >
                        About
                    </a>
                    <a
                        href="/services"
                        className="nav-link text-2xl mb-4 hover:text-green-400"
                        onClick={toggleNav}
                    >
                        Services
                    </a>
                    <a
                        href="/contact"
                        className="nav-link text-2xl mb-4 hover:text-green-400"
                        onClick={toggleNav}
                    >
                        Contact
                    </a>
                </nav>

                {/* Desktop Nav */}
                <div className='md:flex hidden'>
                    <ul className="flex gap-3">
                        <li>
                            <a
                                href="/"
                                className="nav-link text-xl mb-4 hover:text-green-400"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="nav-link text-xl mb-4 hover:text-green-400"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className="nav-link text-xl mb-4 hover:text-green-400"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="nav-link text-xl mb-4 hover:text-green-400"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Nav