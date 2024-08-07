import { FaStar } from 'react-icons/fa';

const Star = ({selected = false, onSelect}) => {
    return (
        <FaStar color={selected ? 'black' : 'grey'} onClick={onSelect}/>
    );
}

export default Star;