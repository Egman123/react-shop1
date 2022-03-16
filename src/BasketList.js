import BasketItem from "./BasketItem"

const BasketList = ({order, removeFromBasket, incQuantity, decQuantity}) => {
   
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
        <div className="BasketList">
        

            {
                order.map((el, index) =>{
                    return <BasketItem 
                    key={index}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                    item={el}
                    />
                })
            }

            <div className="totalPrice">{totalPrice}</div>
        </div>
    )
}

export default BasketList
