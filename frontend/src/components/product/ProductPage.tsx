import { Link } from "react-router-dom";

type Props = {
    image: string,
    name: string,
    description: string,
    price: string,
}

export function ProductPage ({ image, name, price, description}: Props) {
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                src={image}
                alt="Product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{price}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    ) 
}

