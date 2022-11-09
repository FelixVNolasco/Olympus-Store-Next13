import React from 'react'
import ProductCard from '../components/Shared/Cards/ProductCard';

const getHomeProducts = () => {
  return fetch("https://olympus-backend.vercel.app/api/products", { cache: "no-store" })
    .then((res) => res.json())
}

export default async function HomeProducts() {
  const homeProducts = await getHomeProducts();

  return (
    <div className='mt-12 mb-12 w-10/12 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center'>
      {
        homeProducts.slice(0, 6).map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  )
}
