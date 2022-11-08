import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export const Navbar = () => {
    return (
        <div className='bg-gray-800'>
            <div className="flex p-4 justify-between">
                <Link href={"/"} className="flex items-center font-semibold text-slate-50 gap-2">
                    <Image
                        src={"https://res.cloudinary.com/dhyxqmnua/image/upload/c_scale,w_24/v1666391173/Olympus/logo512_fvobug.png"}
                        width={24}
                        height={24}
                        alt="brand icon"
                    />
                    <small className='text-center'>Olympus Store</small>
                </Link>
                <div className='flex gap-3 font-semibold text-slate-50'>
                    <Link href={"/login"} className='py-1 px-2 bg-blue-600 rounded-md'>
                        <small>Iniciar Sesión</small>
                    </Link>
                    <Link href={"/signup"} className='py-1 px-2 bg-slate-50 border-2 border-gray-400 text-gray-800 rounded-md'>
                        <small>Registrarse</small>
                    </Link>
                </div>
            </div>
        </div>
    )
}
