import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from './Preloader'
import {GoodsList} from "./GoodsList"
import {Cart} from "./Cart"




function Shop(){
console.log("Shop loaded")
const [goods, setGoods] = useState([]);
const [loading, setLoading] = useState(true);
const [order, setOrder] = useState([])

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
        <Cart quantity = {order.length} />
        {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
}

export {Shop}