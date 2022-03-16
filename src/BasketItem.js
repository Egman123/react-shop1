

const BasketItem = ({
    removeFromBasket,
    incQuantity,
    decQuantity,
    item
}) => {


    return (
        <div className="BasketItem">
            <span className="item_name">{item.name}</span>
            <button onClick={() => decQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incQuantity(item.id)}>+</button>
            = {item.quantity * item.price}
            <span onClick={() => removeFromBasket(item.id)}> &times; </span>
        </div>
    )
}

export default BasketItem
