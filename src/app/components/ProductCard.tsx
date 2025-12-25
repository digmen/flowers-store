import { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

const ProductCard: FC<{ product: Product }> = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="border p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price} ₽</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => dispatch(addToCart(product))}
            >
                В корзину
            </button>
        </div>
    );
};

export default ProductCard;
