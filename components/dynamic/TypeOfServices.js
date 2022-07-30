import React from 'react'
import Image from 'next/image'
import { urlFor } from "../../client";

export default function TypeOfServices({ service }) {
    console.log({service})
    const { title, description, iconUrl } = service;
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-rows-1 pb-10 mt-30 md:pb-10 lg:pb-0">
            <div className="row-span-2 justify-self-center self-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                    src={`${urlFor(iconUrl)}`}
                    alt={`${title}-icon`}
                    width={80}
                    height={80}
                    />
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-2">
                    <h2 className="text-4xl font-bold pb-3">{ title }</h2>
                    <p className="w-full">{ description }</p>
                </div>
        </div>
    )
}
