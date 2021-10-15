import React from 'react'

const Card = ({title,  children, id}) => {
  
    
    return (
        <section className="card" id={id}>
            <div className="card_title_wrapper"><h4 className="card_title">{title}</h4></div>
            <div className="card_content">{children}</div>
        </section>
    )
}

export default Card
