import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer
            className="animate_ grid justify-items-center bg-gray-800 text-slate-50">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-center items-center'>
                        <h2 className="text-lg">Olympus Store</h2>
                        <Image src="https://res.cloudinary.com/dhyxqmnua/image/upload/c_scale,w_48/v1666391173/Olympus/logo512_fvobug.png" width={48} height={48} alt="Olympus Image" />
                    </div>
                    <p className='text-center'>Los mejores productos para los mejores atletas.</p>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-lg text-center">Encuentra nuestras redes sociales</span>
                    <div className="flex justify-center">
                        <Link className="m-1 hover:text-blue-400 transition ease-in 150ms"
                            href="https://github.com/FelixVNolasco/OlympusStore-React" target="_blank" rel="noreferrer">
                            <Image src={"https://img.icons8.com/carbon-copy/512/github-squared.png"} width={24} height={24} alt="Github"/>   
                        </Link>
                        <Link className="m-1 hover:text-gray-300 transition ease-in 150ms"
                            href="https://www.linkedin.com/in/felixvnolasco/" target="_blank" rel="noreferrer">
                            <Image src={"https://img.icons8.com/glyph-neue/512/linkedin-circled.png"} width={24} height={24} alt="LinkedIn"/>                        
                        </Link>
                        <Link href={"#"} className="m-1 hover:text-blue-300 transition ease-in 150ms">
                            <Image src={"https://img.icons8.com/ios/512/twitter.png"} width={24} height={24} alt="Twitter" />
                        </Link>
                        <Link href={"#"} className="m-1 hover:text-blue-500 transition ease-in 150ms">
                            <Image src={"https://img.icons8.com/ios/512/facebook-new.png"} width={24} height={24} alt="Facebook" />
                        </Link>
                        <Link href={"#"} className="m-1 hover:text-gray-500 transition ease-in 150ms">
                            <Image src={"https://img.icons8.com/sf-black-filled/512/medium-logo.png"} width={24} height={24} alt="Medium" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-lg text-center">Obtener Ayuda</span>
                    <div className="flex flex-col text-sm text-center text-amber-50/90">
                        <Link className="hover:text-amber-50/80" href={"#"}>Estado del pedido</Link>
                        <Link className="hover:text-amber-50/80" href={"#"}>Envío y Entrega</Link>
                        <Link className="hover:text-amber-50/80" href={"#"}>Devoluciones</Link>
                        <Link className="hover:text-amber-50/80" href={"#"}>Opciones de pago</Link>
                        <Link className="hover:text-amber-50/80" href={"#"}>Comunicate con nosotros</Link>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-lg text-center">Acerca de Olympus</span>
                    <div className="flex flex-col text-sm text-center text-amber-50/90">
                        <Link className="hover:text-amber-50/80" href={"#"}>Noticias</Link>
                        <Link className="hover:text-amber-50/80" href={"#"}>Empleo </Link>
                        <Link className="hover:text-amber-50/80" href={"#"}>Inclusión</Link>
                        <Link className="hover:text-amber-50/80" href={"#"}>Sostenabilidad</Link>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-gray-900 justify-end">
                <Link className='text-xs text-slate-50 p-2' target={"_blank"} rel="noreferrer" href="https://pages.flycricket.io/olympus-store/privacy.html">Politicas de Privacidad</Link>
            </div>
        </footer>
    )
}
