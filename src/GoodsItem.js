

const GoodsItem = ({item, addToBasket}) => {
    return (
        <div className='GoodsItem'>
            <div className='item_id'>{item.id}</div>
            <div className='item_name'>{item.name}</div>
            <div className='item_price'>{item.price}</div>
            <img src={item.image} />
            <button onClick={() => addToBasket({
                id: item.id,
                name: item.name,
                price: item.price
            })}>ADD </button>
        </div>
    )
}

export default GoodsItem
