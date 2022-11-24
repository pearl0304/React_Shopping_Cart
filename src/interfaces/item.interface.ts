export interface MenuListInterface {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
}

export interface ShoppingCartItem{
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
}