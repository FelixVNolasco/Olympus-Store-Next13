import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className='container mt-32 mx-auto full-height text-gray-800'>
            <div className='grid lg:grid-cols-2 px-4 md:px-24 items-center gap-4 lg:gap-12'>
                <div className='mt-12 lg:mt-0'>
                    <h1 className='text-center lg:text-left text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight lg:mb-12'>Olympus Store
                        <br />
                        <span className='text-blue-600'>Los mejores en el campo</span>
                    </h1>
                </div>

                <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
                    <Image className='w-8/12 rounded-lg shadow-lg' width={420} height={420} alt={"Hero image"} src="https://res.cloudinary.com/dhyxqmnua/image/upload/c_scale,w_420/v1666391173/Olympus/logo512_fvobug.png" />
                </div>
            </div>
        </section >
    )
}
