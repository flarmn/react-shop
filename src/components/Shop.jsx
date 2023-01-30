import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from './Preloader'
import {GoodsList} from "./GoodsList"




function Shop(){

const [goods, setGoods] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(function getGoods(){
    fetch(API_URL, {
        headers: {'Authorization': '9ca9e036-046818e5-a7d502b2-1440ed35'}
    }).then(response=>response.json()).then(data => {
        console.log(data.shop)
        data.shop && setGoods(data.shop);
        setLoading(false);
    })

}, []);


    return <main className="container content">
        {
            loading ? <Preloader /> : <GoodsList goods={goods} />
        }
    </main>
}

export {Shop}