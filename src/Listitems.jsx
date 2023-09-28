import React from 'react';

function Listitems({item}) {
    return (
        <>
            {
                item.map((elem) => {
                    const { id, image, name, category, price, description } = elem;
                    return (
                        <div class="card_box" key={id}>
                            <figure class="snip1527">
                                <div class="image"><img src={image} alt="pr-sample23" width="400px" height="450px" /></div>
                                <figcaption>
                                    <div class="date"><span class="day">{id}</span><span class="month">No.</span></div>
                                    <h3>Name: {name}</h3>
                                    <h3>Category : {category}</h3>
                                    <h2>Price : {price}</h2>
                                    <p>
                                        {description}
                                    </p>
                                </figcaption>
                                <a href="#"></a>
                            </figure>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Listitems;
