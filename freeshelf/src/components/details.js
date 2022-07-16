import React from 'react'
import 'bulma/css/bulma.min.css';

function Details({ book }) {
    return (
        <div className='extra'>
            {book.url ? (
                <div className='URL'>URL:
                    <a href='book.url'>{book.url}</a>
                </div>
            ) : (
                " "
            )}
            {book.publisher ? (
                <div className='publisher'>Published by: {book.publisher}
                </div>
            ) : (
                " "
            )}
            {book.publicationDate ? (
                <div className='date'>Published in: {book.publicationDate}
                </div>
            ) : (
                " "
            )}
            {book.detailedDescription ? (
                <div className='detailedDescription'>Full Description: {book.detailedDescription}
                </div>
            ) : (
                " "
            )}
        </div>
    )
}

export default Details;