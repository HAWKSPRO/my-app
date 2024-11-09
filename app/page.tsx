import Image from "next/image";
import main_image from "@/public/images/main_image.png"
import heading from "@/public/images/heading.png"
import paragraph from "@/public/images/paragraph.png"
import button from "@/public/images/button.png"
import main_image_outline from "@/public/images/main_image_outline.png"
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-[1486px] h-[825.56px] flex ">
        <div className="w-[1271.01px] h-[573.59px] flex m-auto justify-between">
          <div >
            <h1 className="mb-[60px] mt-[58px]">
              <Image
                className=""
                src={heading}
                alt="heading"
              >
              </Image>
            </h1>
            <p className="mb-[50px]">
              <Image
              className=""
              src={paragraph}
              alt="paragraph"
              >
              </Image>
            </p>
            <button className="w-[247.67px] h-[49.2px] bg-primary flex items-center justify-center rounded-[8.6px] cursor-pointer">
              <Image
                src={button}
                alt="button"
              >
              </Image>
            </button>
            </div>
            <div className=" relative">
              <Image
              className=""
              src={main_image}
              alt="main image"
              width={421.38}
              height={573.59}
              >
              </Image>
              <Image
              className="absolute top-[19px] left-[17px] z-10 "
              src={main_image_outline}
              alt="main image outline"
              width={380.1}
              height={525.43}
              >
              </Image>
            </div>
          </div>
      </div>
    </div>
  );
}
