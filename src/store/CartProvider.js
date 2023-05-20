import React,{useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount:0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        
    
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
         //return the index position of the item
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        
        //retrieve the item via the index position gotten from existingCartItemIndex(up above)
        const existingCartItem = state.items[existingCartItemIndex]

       
        let updatedItems;

        if (existingCartItem)
        {
           const  updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
            
        } else
        {
            updatedItems = state.items.concat(action.item)
            
        }

        // const updatedItem = state.items.concat(action.item)
        //amount means quantity did a mistake in naming amount in components needed
        return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    if (action.type === "REMOVE")
    {
        //return the index position of the item
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)

        //retrieve the item via the index position gotten from existingCartItemIndex(up above)
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;

        if (existingItem.amount === 1 )
        {
            updatedItems = state.items.filter((item) => item.id !== action.id)    

        } else
        {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
            
        }

        return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }

        
    }
    return defaultCartState
}
const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: "ADD",
            item:item
        })
     }

    const removeItemFromCartHandler = id => { 

        dispatchCartAction({
            type: "REMOVE",
            id:id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider