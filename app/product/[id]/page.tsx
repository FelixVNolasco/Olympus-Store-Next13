import Image from 'next/image'
import React from 'react'
import { categories } from '../../data/categories';

const getProduct = (id: string) => {
    return fetch(`https://olympus-backend.vercel.app/api/products/find/${id}`, { cache: "no-store" })
        .then((res) => res.json())
}

export default async function page({ params }: any) {

    const { id } = params;
    const product = await getProduct(id);

    return (
        <main className="grid justify-items-center lg:mt-32 xl-mt-64 mb-64">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
                <div className='flex justify-center'>
                    <Image className='rounded-lg shadow-lg' src={product?.img} width={520} height={520} alt="Product Image" />
                </div>
                <div className="flex flex-col">
                    <h2 className='text-4xl text-center lg:text-left text-gray-800 font-semibold'>{product?.title}</h2>
                    <div className='flex gap-4 mt-1 mb-4'>
                        {product.categories.map((category: string) => {
                            return <span key={category} className="px-1 rounded-md bg-gray-300">{category}</span>
                        })}
                    </div>
                    <p className='text-lg'>{product?.desc}</p>
                    <div className="flex justify-end mb-4">
                        <p className='text-lg font-semibold'>${product?.price}</p>
                    </div>
                    <div className="flex flex-col w-full items-center mb-4">
                        <p className='optionText'>Selecciona tu talla:</p>
                        {/* <select className='border-slate-400 border-2 rounded-md w-3/4' name="" onChange={(e) => setSize(e.target.value)}> */}
                        <select className='border-slate-400 border-2 rounded-md w-3/4' name="">
                            {
                                product.size.map((size: any) => {
                                    return <option value={size} key={size}>{size}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Image src={"https://img.icons8.com/glyph-neue/512/minus-2-math.png"} width={24} height={24} alt="Substract Icon"></Image>
                        {/* <FaMinus className='cursor-pointer' onClick={() => handleQuantity("dec")} /> */}
                        {/* <span className='text-lg'>{quantity}</span> */}
                        <Image src={"https://img.icons8.com/glyph-neue/512/plus-2-math.png"} width={24} height={24} alt="Add Icon"></Image>
                        {/* <FaPlus className='cursor-pointer' onClick={() => handleQuantity("inc")} /> */}
                    </div>
                    <div className="flex justify-center items-center gap-4 transition ease-in-out duration-150">
                        <button disabled={false} className='text-stone-50 bg-gray-800 w-full p-2 rounded-md font-semibold cursor-pointer disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed'>Añadir al Carrito</button>
                        {/* {
                            !isAuthenticated &&
                            <>
                                <Image data-tip data-for='tooltip'src={"https://img.icons8.com/office/512/box-important--v1.png"} width={24} height={24} alt="Warning Icon" />
                                <ReactTooltip id='tooltip' type='warning' backgroundColor='black' textColor='white'>
                                    <span>Para realizar compras, en necesario iniciar sesión.</span>
                                </ReactTooltip>
                            </>
                        } */}
                    </div>
                </div>
            </div>
        </main>
    )
}
