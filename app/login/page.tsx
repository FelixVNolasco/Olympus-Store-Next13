import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginComponent from '../components/Shared/LoginComponent';

export default function Login() {

  return (
    <div className="grid justify-items-center mt-4 lg:mt-32 xl-mt-64 mb-64">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
        <div className="grid grid-cols-1 gap-4">
          <p className="text-3xl font-semibold">Iniciar Sesión</p>
          <LoginComponent />
          <hr />
          <div className="flex flex-col w-full">
            <span className="text-center font-semibold">Iniciar Sesion con:</span>
            <div className="flex justify-center mt-1 gap-4">
              <Image className="cursor-pointer" src={"https://img.icons8.com/fluency/512/google-logo.png"} width={32} height={32} alt="Google Icon" />
              <Image className="cursor-pointer" src={"https://img.icons8.com/color/512/facebook.png"} width={32} height={32} alt="Google Icon" />
            </div>
          </div>
          <hr />
          <Link className="text-gray-800 font-bold" href="/signup">Crea una cuenta aqui.</Link>
          <hr />
          <Link className="text-gray-800 font-semibold" href={"/"}>
            Ir al inicio
          </Link>
        </div>
        <div className="flex justify-center">
          <Image src={"https://res.cloudinary.com/dhyxqmnua/image/upload/v1666483628/Olympus/draw2_y9yzf7.svg"} width={540} height={540} alt="Login Image"></Image>
        </div>
      </div>
    </div>
  )
}
