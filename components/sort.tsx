'use client'

import { useRouter } from "next/navigation"

interface SortProps {
    category: string,
    sort: string,
}

export function Sort({category, sort}: SortProps) {
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const val = e.target.value

        let cat = category ? category : 'all'

        if (val === '') {
            router.push('/?category=' + cat)
            return
        }
        router.push(`/?category=${cat}&sort=${val}`)
    }

    return (
        <select value={sort} onChange={handleChange} className="px-4 py-2 text-gray-500 bg-white border border-gray-200 rounded">
            <option value="">Sort by default</option>
            <option value="price-asc">Price: Asc</option>
            <option value="price-desc">Price: Desc</option>
        </select>
    )
}