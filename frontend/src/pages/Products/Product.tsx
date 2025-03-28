import * as React from 'react';
import { Product } from '../../types/types';
import ProductCard from "../../components/product/ProductCard";
import { backendAPI } from "../../services";

export function ProductPage() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [isLoading, setIsLoading] = React.useState<Boolean>(true);
    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                const allProducts = await backendAPI.getProduct();
                if (allProducts) {
                    console.log('Fetched product', allProducts)
                } else {
                    console.log('No products');
                }
                console.log(isLoading);
                setProducts(allProducts);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err: unknown) {
                setIsLoading(false);
                console.log(isLoading)
                console.error('an error occurred');
            }
        }
       fetchProduct();
    }, []);
    
    return (
        <>
        {isLoading && products ? (
            products.map((product) => (
                <ProductCard 
                    image={product.imgURL} 
                    name={product.name} 
                    price={product.price}
                    description={product.description}
                    slug={product.slug} />
            )) 
        ) : (
            <h1>Loading products...</h1>
        )
        }
        </>
      
    )
}