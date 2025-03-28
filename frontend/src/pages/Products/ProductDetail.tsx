import * as React from "react";
import { Link } from "react-router-dom";
import  { ProductPage }  from "../../components/product/ProductPage";
import { backendAPI } from "../../services";
import { Product } from '../../types/types';
import { useParams } from "react-router-dom";


export function ProductDetail () {
    const [product, setProduct] = React.useState<Product | null>(null);
    const [isLoading, setIsLoading] = React.useState<Boolean>(true);
    const slug = useParams<{slug: any}>().slug;

    const fetchProduct = async () => {
        try {            
            const product = await backendAPI.getProductBySlug(slug);
            if (product) {
                console.log('Fetched product', product)
            } else {
                console.log('No products');
            }
            console.log(isLoading);
            setProduct(product);
            setIsLoading(false);        
        }
        catch (err: unknown) {              
            console.error('an error occurred');
        }
    }

    React.useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
        {!isLoading && product ? (
            <ProductPage 
                image={product.imgURL} 
                name={product.name} 
                price={product.price}
                description={product.description} />
        ) : (
            <h1>Loading product...</h1>
        )
        }
        </>
    ) 
}

