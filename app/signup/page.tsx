import React from 'react'
import SignupComponent from '../components/Shared/SignupComponent';
import Link from 'next/link';
import Image from 'next/image';

export default function Signup() {
  return (
    <div className='grid justify-items-center mt-4 lg:mt-32 xl-mt-64 mb-64'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center'>
        <div className="grid grid-cols-1 gap-4">
          <p className="text-3xl font-semibold">Registrarse</p>
          <SignupComponent />
          <hr />
          <Link className="text-gray-800 font-bold" href="/login">Inicia Sesión.</Link>
          <hr />
          <Link className="text-gray-800 font-semibold" href={"/"}>
            Ir al inicio
          </Link>
        </div>
        <div className="flex justify-center">
          <Image src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1666655263/Olympus/undraw_sign_in_re_o58h_udkhrb.svg" width={540} height={"540"} alt="Signup Image" />
        </div>
      </div>
    </div>
  )
}
