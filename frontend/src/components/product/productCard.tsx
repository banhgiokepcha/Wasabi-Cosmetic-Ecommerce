
type Props = {
    image: string,
    name: string,
    price: string,
}

function ProductDetail({ image, name, price}: Props) {
    return (
        <div className="card bg-base-100 w-50 card-xs shadow-sm">
            <figure className="px-10 pt-10">
            <img 
                src={image}
                alt="product"
                className="w-50 h-50 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions">
                <h2 className='card-title'>{price}</h2>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    )
}

export default ProductDetail;
