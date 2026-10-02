import './Banner.css';
import arrow from '../img/arrow1.svg';

const Banner = () => {
    return (
        <div className="container banner_cont">
            <h1>Крупнейшая коллекция <br /> природных артефактов</h1>
            <p>Являясь всего лишь частью общей картины, интерактивные прототипы, <br /> которые представляют собой яркий пример европейского типа политической <br /> и социальной культуры.</p>
            <a href="#">Исследовать</a >
            <img src={arrow} alt="Arrow" />
        </div>
    );
}

export default Banner;
