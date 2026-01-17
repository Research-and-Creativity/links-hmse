import React from "react";
import Image from "next/image";
import Card from "./card";
import { dataTypes } from "@/type/type";
import { datas } from "@/data/data";

const Content = () => {
  return (
    <>
      <section id="header" className="flex justify-center">
        <div className="flex-col">
          <div className="container py-6 max-w-screen-lg px-4 flex flex-col items-center">
            <Image
              src="/Logo.png"
              alt="logo"
              width={240}
              height={240}
              layout="responsive"
              className="max-w-36 md:max-w-48 lg:max-w-56"
            />
            <h1 className="w-full text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Himpunan Mahasiswa Software Engineering
            </h1>
            <p className="w-full text-sm md:text-base text-center md:pt-4">Official Links of Himpunan Mahasiswa Software Engineering <br /> Telkom University Purwokerto</p>
          </div>
          <div className="">
            {datas.map((e: dataTypes, i: number) => (
              <Card key={i} {...e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
