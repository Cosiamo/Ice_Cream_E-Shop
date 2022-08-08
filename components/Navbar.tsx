import Link from "next/link"

function Navbar() {
    return (
        <header className='flex flex-row w-full h-[4rem] justify-between bg-white/90 fixed z-10
            md:h-[4rem]'
        >
            <div className='flex items-center float-left pl-1
                md:pl-4'
            >
                <Link href='/#home'>
                    <img 
                        src='ice-cream.png'
                        height={45}
                        width={45}
                    />
                </Link>
            </div>
            <div className='py-5'>
            <ul className='flex flex-row items-center pr-2
                md:pr-11 md:text-lg'
            >
                <Link href='/#about'>
                    <li className='px-1 md:px-2'>About</li>
                </Link>
                <Link href='/#flavors'>
                    <li className='px-1 md:px-2'>Flavors</li>
                </Link>
                <Link href='/#contact'>
                    <li className='px-1 md:px-2'>Contact</li>
                </Link>
            </ul>
            </div>
        </header>
    )
}

export default Navbar