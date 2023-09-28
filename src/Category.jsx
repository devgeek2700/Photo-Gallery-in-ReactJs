import React from 'react'

function Category({ filterItem, catitems }) {
    return (
        <>
            <section className='btn_box'>
                {
                    catitems.map((CurrCatgy, idx) => {
                        return <button type="button" class="btn btn-warning"  key = {idx} onClick={() => filterItem(CurrCatgy)} >{CurrCatgy}</button>
                    })
                }
            </section>
        </>
    )
}

export default Category
