import './Footer.css'
import social from '../img/social.svg'

const Footer = () => {
    return (
        <div>
            <footer className="container footer_cont">
            <img src={social} alt="" />
        </footer>
        <div className="foo2">f&b ® 2020</div>
        </div>
    );
}

export default Footer;
