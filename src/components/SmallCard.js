import React from 'react'

const SmallCard = ({title, children}) => {
    return (
        <section className="small_card">
            <h4 className="small_card_title">{title}</h4>
            <div className="small_card_content">{children}</div>
        </section>
    )
}

export default SmallCard
