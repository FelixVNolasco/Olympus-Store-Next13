import React from 'react'

const getHomeProducts = () => {
  return fetch("https://olympus-backend.vercel.app/api/products", { cache: "no-store" })
    .then((res) => res.json())
}

export default async function HomeProducts() {

  const homeProducts = await getHomeProducts();

  return homeProducts.map((product: any) => (
    <article key={product._id}>
      <small>{product.title}</small>
    </article>
  ))
}
