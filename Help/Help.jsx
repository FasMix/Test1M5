import './Help.css';
import banner from '../img/banner.jpg';

const Help = () => {
    return (
        <div className="container help_cont">
            <h1>Помочь проекту</h1>
            <p>Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме <br /> определения прогресса профессионального сообщества. Как принято считать, элементы политического <br /> процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. </p>
            <input type="text" placeholder="Имя" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <button>Отправить</button>
        </div>
    );
}

export default Help;
