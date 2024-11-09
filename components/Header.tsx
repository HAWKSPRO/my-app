import Image from "next/image";
import logo from "../public/images/logo.png"
import search from "../public/images/search.png"
import logos from "../public/images/logos.png"
export function Header(){
    return(
        <div className="h-[135px] w-[1486px]">
            <nav className="bg-primary flex items-center justify-center h-[135px] w-[1486px]">
                <Image 
                    className="mr-[63px]"
                    src={logo}
                    alt="logo"
                    width={242.56}
                    height={87.45}
                >
                </Image>
                <form className="flex w-[769.89px] h-[56.24px] ml-[17px]" action="#" method="get">
                    <input className="w-[769.89px] h-[56.24px] rounded-l-[13.83px] border-none pl-[19px] " type="search" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" />
                    <button className="bg-white rounded-r-[13.83px] pr-[10px]">
                        <Image
                            className="bg-white cursor-pointer"
                            src={search}
                            alt="search"
                            width={21.5}
                            height={21.5}>
                        </Image>
                    </button>
                </form>
                <div className="ml-[80px]">
                    <Image
                        src={logos}
                        alt="logos"
                        width={177.8}
                        height={30.08}
                    >
                    </Image>
                </div>
            </nav>
        </div>
    )
}