import './Product.css';
import pro1 from '../img/pro1.png';
import pro2 from '../img/pro2.png';
import pro3 from '../img/pro3.png';
import pro4 from '../img/pro4.png';
import card_5 from '../img/card_5.jpg';
import arrow from '../img/arrow2.svg';
import ProductCard from './ui/ProductCard';

const Product = () => {
    return (
        <div className="container product_cont">
            <div className="cont1">
            <ProductCard image={pro1} num="2.4" title="Fig. 1 (plant)" text="Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы." marginTop="35px" />
            <ProductCard image={pro2} num="3.1" title="Fig. 2 (flower)" text="Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий." marginTop="59px" />
            <ProductCard image={pro3} num="1.2" title="Fig. 3 (leaf)" text="Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы." marginTop="35px" />
            <ProductCard image={pro4} num="1.4" title="Fig. 4 (wood)" text="Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений." marginTop="59px"/>
            </div>
            <h1>Новые артефакты</h1>
            <div className="cont2">
                <img src={card_5} alt="New Artifact" />
                <div className="cont2_2">
                    <h3>Kurische Nehrung 24</h3>
                    <p className='p1'>Вот вам яркий пример современных тенденций - начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами. </p>
                    <p className='p2'>Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.</p>
                    <a href="#" className='a'>Читать далее</a>
                    <img src={arrow} alt="Arrow" />
                </div>
            </div>
        </div>
    );
}

export default Product;
