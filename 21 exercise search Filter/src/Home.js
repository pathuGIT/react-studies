import { useState } from "react"
import FoodList from './FoodList'

const Home = () => { 

    const [foods, setFoods] = useState (['apple', 'banana', 'cherry', 'date', 'elderberry', 'watermelon']);
    const [filteredFood, setFilteredFoods] = useState(foods);

    const handleInput = (event) => {
        const inputValue = event.target.value.toLowerCase();
        const filtered = foods.filter(food => food.toLowerCase().includes(inputValue));
        setFilteredFoods(filtered);
    };

    return (
        <dev class="food-list ">
            <p className="h2">Search Foods</p>
            <form className="p-5">
                <input 
                    type="text" 
                    onChange={handleInput}
                />
            </form>
           
            <FoodList foodss={filteredFood}/>
        </dev>    
    );
}
 
export default Home;