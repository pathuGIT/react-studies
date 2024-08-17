
const Card = (props) => {
    return (
        <div className='row'>
            {
                props.obj.map((img) => (
                    <div className='col-lg-2 col-md-12 mb-4 mb-lg-0'>
                        {img.map((x)=>(
                            <img className='w-100 shadow-1-strong rounded mb-4' src={x.url} alt={x.name} />
                        ))}
                    </div>
                ))
            }
        </div>
    );
}
 
export default Card;