import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';


export interface IProduct {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number
}
const Home = () => {
    const [products, setProducts] = useState([] as IProduct[]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='row'>
            {
                products?.map(item => <Product
                     key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    id={item.id}
                    price={item.price}
                ></Product>)
            }
       </div>
    );
};

export default Home;