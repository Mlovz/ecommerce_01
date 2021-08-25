import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

import Logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "Lorem, ipsum.",
        path: "/about"
    },
    {
        display: "Lorem, ipsum.",
        path: "/about"
    },
    {
        display: "Lorem, ipsum.",
        path: "/about"
    },
    {
        display: "Lorem, ipsum.",
        path: "/about"
    },
    {
        display: "Lorem, ipsum.",
        path: "/about"
    }
]
const footerCustomerLinks = [
    {
        display: "Lorem, ipsum.Lorem, ipsum.",
        path: "/about"
    },
    {
        display: "Lorem, ipsum.Lorem, ipsum.",
        path: "/about"
    },
    {
        display: "Lorem, ipsum.Lorem, ipsum.",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Lorem, ipsum dolor.
                        </div>
                        <div className="footer__content">
                            <p>
                                Lorem, ipsum dolor. <strong>0123456789</strong>
                            </p>
                            <p>
                                Lorem, ipsum dolor. <strong>0123456789</strong>
                            </p>
                            <p>
                                Lorem, ipsum dolor. <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                           Lorem, ipsum dolor.
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <h1>An-nisa</h1>
                            </Link>
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam odit est vero voluptate autem fuga a beatae unde impedit.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
