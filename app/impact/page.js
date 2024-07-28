import React from "react";

import Image from "next/image";
import Link from "next/link";

//internal import
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import banner from "./banner.jpg"

export default function Impact() {
  return (
    <section className=" bg-base_color poppins mb-10 sm:mb-16 mt-10">
            <div className="banner relative ">
         <Image class="img-container" src={banner}/>
         <div class="overlay"></div>
         <div className="absolute top-40  left-16">
            <h4 className="text-3xl font-semibold text-white tracking-wides mb-2 ">Our <span className="text-base_text">Reaching</span> Arms <br/> to Africa</h4>
            <p className="text-white mb-4">Join us to share Love and <br/> raech as many people possible</p>
            <Link href="/partnership" className="bg-base_text  px-5 py-2 mt-6 font-semibold hover:bg-base_color ease-in-out duration-75 hover:text-white">Find Out More</Link>
         </div>
        </div>
      <div className="container sm:w-3/4 w-[79%] mx-auto">
  
        <div className=" ">
          <div className="text text-white pt-20 text-sm font-extralight leading-loose">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit voluptate quibusdam laborum alias autem ullam dolor
              mollitia et. Explicabo, alias, odit consequatur repellat ratione
              aliquam incidunt molestias ad accusantium velit cumque doloremque
              quas nobis fugit asperiores, doloribus minima. Quos, earum.
              mollitia et. Explicabo, alias, odit consequatur repellat ratione
              aliquam incidunt molestias ad accusantium velit cumque doloremque
              quas nobis fugit asperiores, doloribus minima. Quos, earum.
              mollitia et. Explicabo, alias, odit consequatur repellat ratione
              aliquam incidunt molestias ad accusantium velit cumque doloremque
              quas nobis fugit asperiores, doloribus minima. Quos, earum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit voluptate quibusdam laborum alias autem ullam dolor
              mollitia et. Explicabo, alias, odit consequatur repellat ratione
              aliquam incidunt molestias ad accusantium velit cumque doloremque
              quas nobis fugit asperiores, doloribus minima. Quos, earum.
            </p>

            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit voluptate quibusdam laborum alias autem ullam dolor
              mollitia et. Explicabo, alias, odit consequatur repellat ratione
              aliquam incidunt molestias ad accusantium velit cumque doloremque
              quas nobis fugit asperiores, doloribus minima. Quos, earum.
            </p>
          </div>

          <div className="sm:flex pb-10 pt-20 gap-5">
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <Image src={img1} />
            </div>
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <Image src={img2} />
            </div>
            <div className="sm:w-1/3">
              <Image src={img3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
