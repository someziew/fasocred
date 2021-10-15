import React from 'react'
import {services_products_introduction, services_introduction, services,
products_introduction, products} from '../data/landing'

const Services = () => {
    return (
        <section className="services_products_wrapper">
        <section className="services_products">
            <h3 className="services_products_title">{services_products_introduction}</h3>
            <div className="services_products_body">

                <div className=" services_product">             
                    <h4 className="synthesis_icon_wrapper">{services_introduction} </h4>                 
                    <div className="synthesis_details">
                        {
                            services.map(service => (
                                <>
                                <span className="synthesis_delimiter"></span>
                                <div className="synthesis_detail">
                                    {service}
                                </div>
                                </>
                            ))
                        }        
                    </div>
                    <a className="btn" href="/epargnes">En Savoir Plus</a>
                </div>

                <div className="services_product">             
                    <h4 className="synthesis_icon_wrapper">{products_introduction} </h4>                 
                    <div className="synthesis_details">
                        {
                            products.map(product => (
                                <>
                                <span className="synthesis_delimiter"></span>
                                <div className="synthesis_detail">
                                    {product}
                                </div>
                                </>
                            ))
                        }        
                    </div>
                    <a className="btn" href="/credits">En Savoir Plus</a>
                </div>

            </div>
        </section>
        </section>
    )
}

export default Services
