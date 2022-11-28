import React, {useState} from 'react';
import {database} from "./database/products";
import {ShoppingCartItem} from "./interfaces/item.interface";
import {AppRouter} from "./routers/AppRoutes";
import './App.css'

// SET CATEGORY
const arr = database.map((item) => {
    return item.category
});
arr.push('ALL');
const category = Array.from(new Set(arr)).sort();

const App = () => {
    const [cartItem, setCartItem] = useState<ShoppingCartItem[]>([]);

    const handleAddToCart = (clickedItem: ShoppingCartItem) => {
        setCartItem((prev) => {
            const isItemInCart = cartItem.find((item) => item.id === clickedItem.id);
            if (isItemInCart) {
                return prev.map((item) => (item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item));
            }
            return [{...clickedItem, amount: 1}, ...prev];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItem((prev) =>
            prev.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return acc;
                    return [...acc, {...item, amount: item.amount - 1}]
                } else {
                    return [...acc, item]
                }
            }, [] as ShoppingCartItem[])
        )
    }

    const getTotalItems = (items: ShoppingCartItem[] | null) => {
        return items?.reduce((acc, item) => acc + item.amount, 0)
    }

    return (
        <>
            <AppRouter
                menuList={database}
                category={category}
                cartItem={cartItem}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
                getTotalItem={getTotalItems}/>
        </>


    );
}

export default App;