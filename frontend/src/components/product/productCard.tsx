import { Link } from "react-router-dom";

type Props = {
    image: string,
    name: string,
    description: string,
    price: string,
    slug: string,
}

function ProductCard({ image, name, price, description, slug}: Props) {
    return (
        <div className="card bg-base-100 w-50 card-xs shadow-sm">
            <figure className="px-10 pt-10">
            <img 
                src={image}
                alt="product"
                className="w-50 h-50 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <Link to={`/product/${slug}`}>
                    <h2 className="card-title">{name}</h2>
                </Link>
                <p>{description}</p>
            <div className="card-actions">
                <h2 className='card-title'>{price}</h2>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    )
}

export default ProductCard;
