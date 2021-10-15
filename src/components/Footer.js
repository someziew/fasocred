import React from 'react'
import links  from '../data/links';
const Footer = () => {
    var [accueil, membres, credits, epargnes, contacts] = links;

    return (
        <footer className="footer">
            <div className="footer_menu">
                {
                    links.map((item, index) => {
                        const {links,page} = item
                        return (
                            <article key={index} className="footer_links_group">
                                <h4>{page}</h4>
                                <ul className="footer_links">
                                {links.map((link, index) => {
                                    const { url, icon, label } = link
                                    return (
                                    <a key={index} href={url} className="footer_item">
                                        {label}
                                    </a>
                                    )
                                })}
                                    
                                </ul>
                            </article>
                        )
                    })
                }

            </div>
        </footer>
    )
}

export default Footer
