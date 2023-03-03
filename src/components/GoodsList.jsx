import {GoodsItem} from './GoodsItem'

function GoodsList(props){
    console.log('props from GoodsList',props)
    const {goods = []} = props;

    if(!goods.length ){
        <h3>Nothing here</h3>;
    }

    return (
    <div className="goods">
        {goods.map( (item, index) =>(
            <GoodsItem key={item.mainId} {...item} />
        ))}
    </div>
    );
}

export {GoodsList}