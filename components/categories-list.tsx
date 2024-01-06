import { config } from "@/utils/config"
import Link from "next/link"

interface CategoriesListProps {
    category: string
}

async function getCategories() {
    const response = await fetch(`${config.APIUrl}/products/categories`)
    const categories = await response.json()
    return categories
}

export default async function CategoriesList({category}: CategoriesListProps) {
    const categories = await getCategories()

    return (
        <aside className="w-full lg:w-[300px] lg:min-w-[300px] border-r border-gray-200">
            <h2 className="mb-4 text-xl font-semibold">Categories</h2>
            <ul className="space-y-2">
                <li>
                    <Link className={ `${'' === category || 'all' === category || !category ? 'text-blue-600' : ''}` } href="/">
                        All
                    </Link>
                </li>
                {categories.map((cat: string) => (
                    <li key={cat}>
                        <Link className={ `${cat === category ? 'text-blue-600' : ''}` } href={`/?category=${cat}`}>
                            {cat}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}