import {gamestore} from '../NavBar/NavBar.module.css'
import gamestoreImage from '../../assets/img/gamestore.png';
import style from './ImagenLogo.module.css';
const Logo = () => {
    return (
        <div className={style.ContenedorImagen}>
        <a href="#"><img src={gamestoreImage} alt="gamestore" className={gamestore}/></a>
        </div>
    );
};
export default Logo   