import React from 'react'
import CategoryCard from './Cards/CategoryCard';
import { categories, category } from '../../data/categories';


export default function CategoriesSection() {
    return (
        <div className="container mt-24 mb-24 mx-auto">
            <div className='flex justify-center gap-4 items-center'>
                {
                    categories.map((category: category) => {
                        return <CategoryCard key={category.id} item={category} />;
                    })
                }
            </div>
        </div>
    )
}
