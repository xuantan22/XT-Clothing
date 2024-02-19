/* eslint-disable no-unused-expressions */
import React, { createContext, useCallback, useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'
export const CartContext = createContext(); 
const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartTotalQty, setCartTotalQty]  = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    // useEffect(() => {
    //     const cartItems = localStorage.getItem('storeXTCartItems')
    //     const localStorageProducts = JSON.parse(cartItems);
    //     setCartProducts(localStorageProducts)
    // },[])

    useEffect(() => {
        const getTotals = () => {
            if(!Array.isArray(cartProducts) || cartProducts === null || cartProducts === undefined){
                console.error('Invalid cartProducts', cartProducts);
                return;
            }
            if(cartProducts){
                const {total,qty} = cartProducts.reduce((acc, item)=>{
                    const itemTotal = item.price * item.quantity
                    acc.qty += item.quantity
                    acc.total += itemTotal
                    return acc
                },{
                    qty:0,
                    total:0
                })
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }
        }
        getTotals()
    },[cartProducts])

   
    const addToCart =( product, id) =>{
        let updatedCart;
        const newItem  = { ...product, quantity: 1};

        if(!Array.isArray(cartProducts)){
            console.error("Invalid CartProducts", cartProducts)
            return;
        }
        const cartItem = cartProducts.find((item) => {
            return item.id === id;
        });
        if(!Array.isArray(cartProducts)){
            console.error("Invalid CartProducts", cartProducts)
            return null;
        }
        if(cartItem) {
             updatedCart = [...cartProducts].map((item) => {
                if(item.id === id){
                    return {...item, quantity: cartItem.quantity + 1}
                }else {
                    return item
                }
            });
            localStorage.setItem('storeXTCartItems',JSON.stringify(updatedCart));
            setCartProducts(updatedCart);
        }else{
            updatedCart = newItem
            localStorage.setItem('storeXTCartItems',JSON.stringify(updatedCart));
            setCartProducts([...cartProducts, updatedCart])
        }
        
    }
    const handleAddProductToCart = useCallback((product) => {
        setCartProducts((prev) => {
            let updatedCart;
            if(prev) {
                const update = [...prev]
                const cartItem = update.findIndex((item) => item.id === product.id)
                if(cartItem > -1) {
                    update[cartItem].quantity === ++update[cartItem].quantity
                }
                updatedCart = [...update];
                
            }else{
                updatedCart = [product];
            }
            localStorage.setItem('storeXTCartItems', JSON.stringify(updatedCart))
            return updatedCart;
        });
    }, []);
    const handleCartQtyIncrease = useCallback((product) => {
        let updatedCart;
        if(product.quantity === 99) {
            return toast.error("maximum reached");
        }
        if(cartProducts){
            updatedCart = [...cartProducts]
                const existingIndex = cartProducts.findIndex((item) => 
                item.id === product.id)
                if(existingIndex > -1){
                    updatedCart[existingIndex].quantity === ++updatedCart[existingIndex].quantity
                    setCartProducts(updatedCart)
                    localStorage.setItem('storeXTCartItems', JSON.stringify(updatedCart))
            
        }
    }
    },[cartProducts]);

    const handleCartQtyDecrease = useCallback((product)=> {
        let updatedCart;
        if(product.quantity <=1){
            return toast.error("minimum reached");
        }
        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item) =>
            item.id === product.id)
            if(existingIndex > -1){
                updatedCart[existingIndex].quantity === --updatedCart[existingIndex].quantity
                setCartProducts(updatedCart)
                localStorage.setItem('storeXTCartItems',JSON.stringify(updatedCart))
            }
        }
    },[cartProducts])

    const handleRemoveProductFromCart = useCallback((product) => {
        if(cartProducts){
            const filteProducts = cartProducts.filter((item)=>{
                return item.id !== product.id
            })
            setCartProducts(filteProducts);
            toast.success('Product removed from Cart')
            localStorage.setItem('storeXTCartItems', JSON.stringify(filteProducts))
        }
    },[cartProducts])
    
    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem('storeXTCartItems',JSON.stringify(null))
    },[])
  return (
    <CartContext.Provider 
    value={{
    cartProducts,
    cartTotalQty,
    cartTotalAmount,
    setCartTotalQty,
    setCartTotalAmount,
    addToCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleClearCart
    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider