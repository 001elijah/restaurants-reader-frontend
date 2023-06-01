import { ToastContainer } from 'react-toastify';
import css from './DishesList.module.css';

const DishesList = ({ dishes, handleClick }) => {
    const placeholderImage = dishes.foodURL;
    const dishesList = dishes.menu;
    const restaurant = dishes.restaurant;
    return (
        <>
            <ToastContainer />
            <ul className={css.DishesList}>
                {dishesList && dishesList.map((dish, index) =>
                    <li className={css.DishCard} key={index}>
                        <img className={css.Image} src={`https://restaurants-reader-backend.onrender.com/${placeholderImage}`} alt="" />
                        <div className={css.TextWrapper}>
                            <p>{dish.title}</p>
                            <div className={css.FlexWrapper}>
                                <p>price: {dish.price}</p>
                                <button className={css.Button} onClick={()=>handleClick(dish, `https://restaurants-reader-backend.onrender.com/${placeholderImage}`, restaurant)}>add to Cart</button>
                            </div>
                        </div>
                    </li>)}
            </ul>
        </>
    )
}

export default DishesList;