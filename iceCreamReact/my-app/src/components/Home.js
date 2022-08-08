
import{ Link } from 'react-router-dom';

const Home =(props)=> {
   
console.log(props)

const homeElements = props.storeData.map(item=>{
    // console.log(item)
    return (
        <div key={item.id} className="col-md-2">
        <div className="block">
            <h3 className="product-name">{item.name}</h3>
            <p className="">{item.base_flavor}</p>
            <img src={item.img} alt="product-img" className="photo"/>
            <p className='price'>{item.price}</p>
            <Link className="main-btn main-link btn" id='purchase-button' to={`/stock/${item.id}`}>Purchase</Link>
        </div>
        </div>
    )
})
return(
    <main>
        <section className="container">
        <div className="row">
            {homeElements}
        </div>
        </section>
    </main>
)
}

export default Home

