import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryCard({ item }: any) {
  return (
    <Link className='' href={`/products/${item.category}`}>
      <div className=''>
        <Image className='rounded-md' src={item.img} width={320} height={480} alt="Category Image" />
      </div>
    </Link>
  )
}
