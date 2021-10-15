import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <section>
                <h1>404</h1>
                <h3>Désolé, page inexistante</h3>
                <Link to='/' className='btn'>
                    Retournez a la page d'accueil
                </Link>
            </section>
        </div>
    )
}

export default ErrorPage
