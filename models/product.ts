export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
    rating: number;
    stock: number;
    discountPercentage: number;
    brand: string;
    category: string;
    images: string[];
}