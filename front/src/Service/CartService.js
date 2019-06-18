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

  static addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart === null) {
      cart = [{
        id: productId,
        quantity: 1, 
      }];
    }
    else {
      let productInCart = null;
      for (let i = 0; i < cart.length; ++i) {
        if (cart[i].id === productId) {
          productInCart = i;
        };
      }

      if (productInCart !== null) {
        cart[productInCart].quantity++;
      }
      else {
        cart = [...cart, {
          id: productId,
          quantity: 1, 
        }]
      }
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// cart = [...cart, {
//   id: product.id,
//   quantity: 1,
// }];