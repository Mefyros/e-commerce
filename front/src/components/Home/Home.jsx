import React from 'react';
// import {
//     Example,
// } from './style';

export default class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <>
                <div className="prod-card-demo-grid container container--md">
                    <div className="prod-card">
                        <span className="prod-card__badge">New <i className="sr-only">product</i></span>
                    
                        <a href="#0" className="prod-card__img-link" aria-label="Description of the link">
                        <figure className="prod-card__img">
                            <img src="https://jardinage.lemonde.fr/images/dossiers/2017-12/pic-epeiche-1-135005.jpg" alt="Product preview img" />
                        </figure>
                        </a>
                    
                        <div className="prod-card__content">
                        <a href="#0" className="prod-card__title">
                            <h3>Product One</h3>
                        </a>
                    
                        <div className="prod-card__price-wrapper">
                            <span className="prod-card__price">$79</span>
                        </div>
                        </div>
                    </div>

                    <div className="prod-card">
                        <a href="#0" className="prod-card__img-link" aria-label="Description of the link">
                        <figure className="prod-card__img">
                            <img src="https://jardinage.lemonde.fr/images/dossiers/2017-12/pic-epeiche-1-135005.jpg" alt="Product preview img" />
                        </figure>
                        </a>
                    
                        <div className="prod-card__content">
                        <a href="#0" className="prod-card__title">
                            <h3>Product Two</h3>
                        </a>
                    
                        <div className="prod-card__price-wrapper">
                            <span className="prod-card__price">$79</span>
                        </div>
                        </div>
                    </div>

                    <div className="prod-card">
                        <a href="#0" className="prod-card__img-link" aria-label="Description of the link">
                        <figure className="prod-card__img">
                            <img src="https://jardinage.lemonde.fr/images/dossiers/2017-12/pic-epeiche-1-135005.jpg" alt="Product preview img" />
                        </figure>
                        </a>
                    
                        <div className="prod-card__content">
                        <a href="#0" className="prod-card__title">
                            <h3>Product Three</h3>
                        </a>
                    
                        <div className="prod-card__price-wrapper">
                            <del className="prod-card__price prod-card__price--old">$79</del> 
                            <ins className="prod-card__price prod-card__price--new">$49</ins>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}