import { useState } from 'react'
import Details from './details'
import React from 'react'


function Book({ book }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div class="card">
            <h3 class="title is-italic">{book.title}</h3>
            <div class="content is-small">
                <h3>Author: {book.author}</h3>
                <h3>Short Description: {book.shortDescription}</h3>
                <div class="card-image">
                    <figure class="image is-128x128">
                        <img src={book.coverImageUrl}></img>
                    </figure>
                </div>
                {expanded ? (
                    <button aria-expanded="true" aria-controls="extra" class="button is-light is-focused is-rounded is-fullwidth is-small is-info is-outlined" onClick={() => setExpanded(!expanded)}>Show Less</button>
                ) : (
                    <button aria-expanded="false" aria-controls="extra" class="button is-light is-focused is-rounded is-fullwidth is-small is-info is-outlined" onClick={() => setExpanded(!expanded)}>Show More</button>
                )}
                {expanded ? (
                    <Details book={book} />
                ) : (
                    " "
                )}
            </div >
        </div >
    )
}

export default Book;