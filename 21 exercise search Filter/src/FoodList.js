const FoodList = (props) => {
    const foods = props.foodss;

    return (
        <ul className="list-group">
            {
                foods.map((food)=>(
                    <li className="list-group-item list-group-item-action">{food}</li>
                ))
            }
        </ul>
    );
}
 
export default FoodList;