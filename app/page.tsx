import { config } from '@/utils/config'
import { Product } from '@/models/product'
import { Sort } from '@/components/sort'
import ProductItem from '@/components/product'
import CategoriesList from '@/components/categories-list'

interface SearchProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    },
}

async function getProducts(category: string = 'all') {
    let response = null;

    if (category !== 'all') {
        response = await fetch(`${config.APIUrl}/products/category/${category}`)
    } else {
        response = await fetch(`${config.APIUrl}/products`)
    }

    const products = await response.json()
    return products
}

export default async function Page({searchParams}: SearchProps) {
    const { category, sort } = searchParams
    const products = await getProducts(category as string)

    switch (sort) {
        case 'price-asc':
            products.products.sort((a: Product, b: Product) => a.price - b.price)
            break;
        case 'price-desc':
            products.products.sort((a: Product, b: Product) => b.price - a.price)
            break;
        default:
    }

    return (
        <section className="py-10">
            <div className="container">
                <div className="border-b border-gray-200 pb-6 mb-6">
                    <h1 className="text-4xl font-bold leading-tight">Products</h1>
                    <p className="mt-1 text-gray-500">Browse our catalog of products</p>
                </div>
                <div className="flex flex-wrap flex-col-reverse lg:flex-nowrap lg:flex-row">
                    <CategoriesList category={category as string} />
                    <div className="w-full pb-10 lg:flex-grow lg:pl-8">
                        <div className="flex pb-5 border-b border-gray-200 items-center">
                            <div className="flex-grow font-semibold">
                                Show {products.products.length} products
                            </div>
                            <div className="">
                                <Sort category={category as string} sort={sort as string} />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            {products.products.map((product: Product) => <ProductItem key={product.id} {...product} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}