import type { Product } from "@/models/product"
import Image from "next/image"
import Link from "next/link"

export default function Product({
    id,
    thumbnail,
    title,
    description,
    price,
}: Product) {
    return (
        <div className="w-full py-6 border-b border-gray-100">
            <div className="flex">
                <div className="w-[100px] min-w-[100px] md:w-[200px] md:min-w-[200px]">
                    <figure className="relative pt-[100%] overflow-hidden bg-[#f2f2f2]">
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill={true}
                            sizes="100%"
                            className="object-cover w-full"
                            loading="lazy"
                            />
                    </figure>
                </div>
                <div className="flex-grow pl-8">
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">{title}</h2>
                    <p className="mt-2 text-gray-500">{description}</p>
                    <p className="mt-3 text-lg font-semibold">${price}</p>
                    <p className="mt-6">
                        <Link className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700" href={`/product/${id}`}>
                            View Product
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}