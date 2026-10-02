const ProductCard = ({ image, num, title, text, marginTop }) => {
    return (
        <div className="product_card">
            <div className="card1">
            <div className="ball">
                <p num={num} >{num}</p>
            </div>
            <img src={image} alt="" />
            </div>
            <div className="card2">
                <p className="card_title" title={title}>{title}</p>
                <p className="card_text" text={text}>{text}
                </p>
                <button style={{ marginTop: marginTop }}>Подробнее</button>
            </div>
        </div>
    );
}

export default ProductCard;
