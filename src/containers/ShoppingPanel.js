import React, { useState } from 'react'
import ShoppingCounter from '../components/Shopping/ShoppingCounter';
import ShoppingCollection from '../components/Shopping/ShoppingCollection';

const ShoppingPanel = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Ayam',
            price: 20000,
            picked: false,
        },
        {
            id: 2,
            name: 'Bebek',
            price: 40000,
            picked: false,
        },
        {
            id: 3,
            name: 'Ikan',
            price: 5000,
            picked: false,
        },
    ]);

    const onChecked = (id, value) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === id) {
                    product.picked = value;
                }

                return product;
            });
        })
    }

    let total = 0;
    products.forEach(d => {
        if (d.picked) {
            total = total + d.price;
        };
    });
    return (
        <div>
            <ShoppingCounter total={total} />
            <ShoppingCollection products={products} onChecked={onChecked} /> 
        </div>
    )
}

export default ShoppingPanel
