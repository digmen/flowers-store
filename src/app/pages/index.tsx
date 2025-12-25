'use client'
import ProductCard from "@/components/ProductCard";
import { useEffect } from "react";

const products = [
    { id: "1", name: "Розы", price: 1000, image: "/rose.jpg" },
    { id: "2", name: "Тюльпаны", price: 800, image: "/tulip.jpg" },
];

export default function Home() {

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.expand();
        }
    }, []);
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
