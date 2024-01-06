import { config } from '@/utils/config'
import { Product } from '@/models/product'
import { Carousel } from '@/components/carousel'

export default async function DetailProductPage({ params }: { params: { id: string } }) {
    const response = await fetch(`${config.APIUrl}/products/${params.id}`)
    const product: Product = await response.json()

    return (
        <section className="py-20">
            <div className="container">
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-[400px] md:min-w-[400px]">
                        <figure className="relative overflow-hidden bg-[#f2f2f2]">
                            <Carousel images={product.images} />

                            {product.stock > 0 && (   
                                <div className="absolute top-0 right-0 z-10 px-2 py-1 text-xs font-semibold tracking-wide text-white bg-green-500 rounded-bl">
                                    In Stock
                                </div>
                            )}
                        </figure>
                    </div>
                    <div className="w-full pt-8 md:w-auto md:flex-grow md:pt-0 md:pl-8">
                        <h2 className="text-2xl font-bold leading-tight">{product.title}</h2>
                        <p className="mt-2 text-gray-500">{product.description}</p>
                        <p className="mt-3 text-lg font-semibold">${product.price}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}