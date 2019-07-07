import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import * as S from './style';
import { css } from 'emotion';
import { connect } from 'react-redux';
import { addToCart } from '../../../../Redux/Action/CartAction';
import Button from '../../../DefaultComponent/Button';

const mapStateToProps = state => {
    return { products: state.cart };
}

const mapDispatchToProps = dispatch => ({
    addToCart: payload => dispatch(addToCart(payload)),
});

class CustomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.product,
            photos: JSON.parse(props.product.photos),
        }
        this.productLink = `/product/${props.product.id}`;
        this.productLinkId = `product${props.product.id}`;
    }

    showProduct = e => {
        if (e.target.id !== 'add-to-cart' && e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
            const redirect = document.getElementById(this.productLinkId);
            redirect.click();
        }
    }

    addToCart = e => {
        const { addToCart } = this.props;
        const { id, name, photos, price } = this.state;
        addToCart({ id, image: photos[0], name, price });
    }

    render() {
        const { name, photos, price, description } = this.state;

        return (
            <Card className={css(S.cardStyle)} onClick={this.showProduct}>
                <CardMedia
                    className={css(S.media)}
                    image={photos[0]}
                    title={name}
                />
                <CardContent className={css(S.content)}>
                    <Typography variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        (0 reviews)
                    </Typography>
                    <Typography variant="body2" className={css(S.priceColor)} component="h2">
                         {price}$
                    </Typography>
                    <Typography className={css(S.descript)} variant="body2" color="textSecondary" component="h2">
                        {description.substring(0, 75)}...
                    </Typography>
                    <CardActions className={css(S.addToCard)} disableSpacing>
                        <Button
                            buttonStyle={css(S.card)}
                            text="Add to cart"
                            onClick={this.addToCart}
                            icon={<i class="fas fa-cart-plus"></i>}
                            left/>
                    </CardActions>
                </CardContent>
                <Link id={this.productLinkId} to={this.productLink}/>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);


