export interface Product {
    id: string,
    name: string,
    description: string,
    category: Category[],
    brand: string,
    slug: string,
    price: string,
    imgURL: string
}

export interface Category {
    id: string,
    name: string,
    description: string
}