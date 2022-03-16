import GoodsItem from "./GoodsItem"

const GoodsList = ({goods, addToBasket}) => {
    return (
        <div>
           {
               goods.map( (el, index) => {
                   return <GoodsItem key={index} item = {el} addToBasket={addToBasket}/>
               } )
           }
        </div>
    )
}

export default GoodsList
