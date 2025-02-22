import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";

const Navbar = () => {
    return (
        <div className="bg-gray-100 shadow-md p-4">
            <nav className="container mx-auto flex justify-between gap-4 items-center">
                <div className="logo">
                    <Link to={'/'}>
                    <img
                        className="h-30 w-30"
                        src="https://liquiddeath.com/cdn/shop/files/Logo-Stopandshop-750x750_1500x.webp?v=1684777960"
                        alt="logo"
                    />
                    </Link>
                    
                </div>
                <div className="hidden md:flex gap-6 items-center text-gray-800 font-medium">
                    <Link to={'/'} className="hover:text-blue-600">Сувениры</Link>
                    <Link to={'/'} className="hover:text-blue-600">Красота и здоровье</Link>

                    <select className="border border-gray-300 rounded-md p-2 bg-white">
                        <option>Мужская одежда</option>
                        <option>Женская одежда</option>
                        <option>Детская одежда</option>
                        <option>Акссесуары</option>
                    </select>

                    <select className="border border-gray-300 rounded-md p-2 bg-white">
                        <option>Adidas</option>
                        <option>Reebook</option>
                        <option>Nike</option>
                        <option>Joma</option>
                    </select>

                    <select className="border border-gray-300 rounded-md p-2 bg-white">
                        <option>Обувь</option>
                        <option>Женская одежда</option>
                        <option>Детская одежда</option>
                        <option>Акссесуары</option>
                    </select>

                    <Link to={'/'} className="hover:text-blue-600">Хоз. товары</Link>
                    <Link to={'/'} className="hover:text-blue-600">Авто товары</Link>
                </div>

                <div className="flex items-center gap-4">
                    <input
                        type="search"
                        className="border border-gray-300 rounded-md px-4 py-2"
                        placeholder="Поиск..."
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        🔍
                    </button>

                    <button className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">
                        🛒
                    </button>

                    <select className="border border-gray-300 rounded-md p-2 bg-white">
                        <option>UZB</option>
                        <option>RUS</option>
                        <option>ENG</option>
                    </select>
                </div>
            </nav>
        </div>

        // <header className="text-gray-600 body-font">
        //     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        //         <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        //                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        //             </svg>
        //             <span className="ml-3 text-xl">Tailblocks</span>
        //         </Link>
        //         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        //             <Link to={'/'} className="mr-5 hover:text-gray-900">First Link</Link>
        //             <Link to={'/'} className="mr-5 hover:text-gray-900">Second Link</Link>
        //             <Link to={'/'} className="mr-5 hover:text-gray-900">Third Link</Link>
        //             <Link to={'/'} className="mr-5 hover:text-gray-900">Fourth Link</Link>
        //         </nav>
        //         <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        //             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        //                 <path d="M5 12h14M12 5l7 7-7 7"></path>
        //             </svg>
        //         </button>
        //     </div>
        // </header>
    )
}

export default Navbar