import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }: any) {
    function truncate(str: string, n: number) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    }
    return (
        <Link href={`/product/${product._id}`} key={product._id} className='border-slate-200 border-2 rounded-md drop-shadow-lg shadow-sm shadow-slate-200 w-80 p-4'>
            <Image className='mx-auto mb-2 rounded-md' src={product.img} width={240} height={240} alt="" />
            <div className="productInfo">
                <p className='titleProduct'>{truncate(product.title, 35)}</p>
                <div className='priceStock'>
                    <p className='price'>${product.price}</p>
                    <p className={product.inStock ? 'inStock' : 'notAvailable'}>{product.inStock ? 'Disponible' : 'Agotado'}</p>
                </div>
            </div>
        </Link>
    )
}
