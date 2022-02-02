import React, { useState } from 'react';

import Card from '../components/Card';
import Button from '../components/Button';

import ocean from '../assets/ocean.jpg';
import plant from '../assets/plant.jpg';
import weather from '../assets/weather.jpg';
import lightandlife from '../assets/lightandlife.jpg';

const Shop = () => {
  const books = [
    {
      id: 1,
      name: 'About Oceans',
      author:'John Smith',
      price: 10.50,
      image: ocean,
      color: 'blue'
    },
    {
      id: 2,
      name: 'About Plants',
      author: 'David Williams',
      price: 15.00,
      image: plant,
      color: 'bittersweet'
    },
    {
      id: 3,
      name: 'About Weather',
      author:'Christine Hurley',
      price: 21.00,
      image: weather,
      color: 'pantone'
    },
    {
      id: 4,
      name: 'Light and Life',
      price: 25.00,
      author: 'Anthony Miller',
      image: lightandlife,
      color: 'lavender'
    },
  ];

  const [subtotal, setSubtotal] = useState(0);

  return(
    <div className="m-3">
      <h1 className="mb-3">Bestselling Books</h1>
      <p className="lead">Click button on the book to see subtotal and total.</p>
      <div className="row">
      {/* Iteration to render book content in a card */}
        { books.map((book) => 
          <Card key={book.id} color={book.color} className="mb-3"> 
            <div className="col">                  
              <img className="card-img-top" height="200" src={book.image} alt={book.name} />            
              <div className="card-body">
                  <h5 className="card-title text-left">{book.name.toUpperCase()}</h5>
                  <p className="card-text text-left">Author: {book.author}</p>
                  <p className="card-text text-left">Price: ${book.price.toFixed(2)}</p>              
              </div>                    
            </div>               
              <Button onClick={()=>setSubtotal(subtotal + book.price)}>ADD TO CART</Button>              
            </Card>            
          ) 
        } 
      </div>
      {/* Display subtotal, tax and total when add a book */}
      <div className="mt-5">
        <h5>Subtotal: {subtotal === 0? '0' : `$${subtotal.toFixed(2)}`}</h5>
        <p className="small mt-3 lead">Tax(13%HST): {subtotal === 0? '0' : `$${(subtotal*0.13).toFixed(2)}`}</p>
        <h5>Total: {subtotal === 0? '0' : `$${(subtotal*1.13).toFixed(2)}`} </h5>
      </div>
    </div>
  );
}

export default Shop;