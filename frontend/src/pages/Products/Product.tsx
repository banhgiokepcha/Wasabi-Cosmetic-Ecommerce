import * as React from 'react';
import { Link } from "react-router-dom";
import { Product } from '../../types/product';
import ProductDetail from "../../components/product/productCard";
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
                <ProductDetail 
                    image={product.imgURL} 
                    name={product.name} 
                    price={product.price} />
            )) 
        ) : (
            <h1>Loading products...</h1>
        )
        }
        </>
      
    )
}