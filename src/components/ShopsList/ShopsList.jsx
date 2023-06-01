import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRestaurants } from '../../services/foodAPI';

const ShopsList = ({cart, handleRestaurantClick}) => {
    const [restaurants, setRestaurants] = useState([]);

    const location = useLocation();
    useEffect(() => {
        getRestaurants()
            .then(results => setRestaurants(results))
            .catch(error => console.log(error));
    }, []);
    // let disabled = false;
    // console.log(cart)
    return (
        <>
            {restaurants.length === 0 && <span>Loading...</span>}
            {restaurants.length > 0 &&
                <ul>
                    {restaurants.map(restaurant => <li key={restaurant._id}><Link onClick={(e) => handleRestaurantClick(e, restaurant._id)} key={restaurant._id} to={`/`} state={location}>{restaurant.restaurant}</Link></li>)}
                </ul>}
        </>
    )
}

export default ShopsList;