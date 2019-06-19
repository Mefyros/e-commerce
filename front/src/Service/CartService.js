import Axios from 'axios';

export default class CartService {

  // static async getById(id) {
  //   return Axios.get(`/api/categorie/${id}`, {
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  // static async create(data) {
  //   return Axios.post(`/api/categorie`,
  //     data, {
  //       headers: {
  //         "Content-type": "application/json"
  //       }
  //     })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  // static async update(id, data) {
  //   return Axios.put(`/api/categorie/${id}`,
  //     data, {
  //       headers: {
  //         "Content-type": "application/json"
  //       }
  //     })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  // static async delete(id) {
  //   return Axios.delete(`/api/categorie/${id}`, {
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  static addToCart({ id, name, image, price }) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart === null) {
      cart = [this.newCartItem(id, name, image, price)];
    }
    else {
      let productInCart = null;
      for (let i = 0; i < cart.length; ++i) {
        if (cart[i].id === id) {
          productInCart = i;
        };
      }

      if (productInCart !== null) {
        cart[productInCart].quantity++;
      }
      else {
        cart = [...cart, this.newCartItem(id, name, image, price)]
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  static getCartContent() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  static deleteCartItem(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = [];
    
    for (let i = 0; i < cart.length; ++i) {
      if (cart[i].id !== parseInt(itemId)) {
        newCart.push({...cart[i]});
      }
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
    return this.getCartContent();
  }

  static clearCart() {
    localStorage.setItem('cart', JSON.stringify([]))
    return this.getCartContent();
  }

  static setNewQuantity(id, quantity) {
    const cart = this.getCartContent();

    let itemId = null;
    for (let i = 0; i < cart.length; ++i) {
      if (cart[i].id === id) {
        itemId = i;
      };
    }

    cart[itemId].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  static newCartItem(id, name, image, price, quantity = 1) {
    return {
      id,
      name,
      image,
      quantity,
      price,
    }
  }
}