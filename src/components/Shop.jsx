import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from './Preloader'
import {GoodsList} from "./GoodsList"
import {Cart} from "./Cart"
import {BasketList} from "./BasketList"




function Shop(){
console.log("Shop loaded")
const [goods, setGoods] = useState([]);
const [loading, setLoading] = useState(true);
const [order, setOrder] = useState([]);
const [isBasketShow, setBasketShow] = useState(false);
console.log('order', order)

const addToBasket  = (item) => {
   /// console.log("addToBasket", addToBasket)
    const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)
    if(itemIndex < 0){
        const newItem = {
            ...item,
            quantity:1,
        }
        setOrder([...order, newItem])
    }else{
        const newOrder = order.map((orderItem, index)=>{
            if(index === itemIndex){
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            }else{
                return orderItem; 
            }
        }) 

        setOrder(newOrder);
    }


   
}

const handleBasketShow = () =>{
    setBasketShow(!isBasketShow);
}

useEffect(function getGoods(){
    console.log("Shops useEffect started")
    fetch(API_URL, {
        headers: {'Authorization': '9ca9e036-046818e5-a7d502b2-1440ed35'}
    }).then(response=>response.json()).then(data => {
        //console.log(data.shop)
        data.shop && setGoods(data.shop);
        setLoading(false);
    })

}, []);


    return <main className="container content">
        <Cart 
        quantity = {order.length} 
        handleBasketShow = {handleBasketShow}
        />

        {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket = {addToBasket} />}

        {
            isBasketShow && <BasketList order = {order} handleBasketShow = {handleBasketShow}/>
        }

    </main>
}

export {Shop}