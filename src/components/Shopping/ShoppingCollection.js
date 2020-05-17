import React from 'react';
import Shopping from './Shopping';

const ShoppingCollection = ({products, onChecked}) => {
    return (
        <table style={{width: 500, margin: 20}}>
            <tbody>
                {products.map(product => (
                    <Shopping 
                        key={product.id}
                        id={product.id}
                        name={product.name} 
                        price={product.price} 
                        picked={product.picked} 
                        onChecked={onChecked}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ShoppingCollection
