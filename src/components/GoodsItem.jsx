function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
    } = props;

    return <div className="card" mainId={mainId}>
        <div className="card-image">
            <img src={displayAssets[0].full_background} alt = {displayName}/>
                
        </div>
        <div className="card-content">
        <span className="card-title">{displayName}</span>
            <button className = "btn ">Buy</button>
            <span className="right" style={{fontSize: '1.8rem'}}>{price.regularPrice} Rub</span>
            <p>
                {displayDescription}
            </p>
        </div>
    </div>
}

export { GoodsItem }