import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const StockSingle=() =>{
    const id = useParams().id;

    const [stock, setStock] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3001/api/stock/${id}`)
        .then(res=>res.json())
        .then(data => setStock(data))
    }, [])
    return (
        <div key={stock.id} className="col-md-2">
        <div className="block">
            <h3 className="product-name">{stock.name}</h3>
            <p className="">{stock.base_flavor}</p>
            <img src={`/${stock.img}`} alt="product-img" className="photo"/>
            <p className='price'>{stock.price}</p>
            <button>Purchase</button>
        </div>
        </div>
    )
}

export default StockSingle