import React from 'react'
import links, {footerLinks}  from '../data/links';
const Footer = () => {
    var [accueil, membres, credits, epargnes, contacts] = links;

    return (
        <footer className="footer">
            <div className="footer_menu">
                <ul className="footer_links">
                    {
                        footerLinks.map((link, index) => {
                            const {label, url} = link;
                            return (
                                <a key={index} href={url} className="footer_item">
                                    {label}
                                </a>
                            )
                        })
                    }
                </ul>

                {/* {
                    
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
                } */}

            </div>
        </footer>
    )
}

export default Footer
