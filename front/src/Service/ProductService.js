import Axios from 'axios';

export default class ProductService {
  static async getAll()
  {
    Axios.get("http://127.0.0.1:8000/api/products")
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async getById(id)
  {
    Axios.get(`http://127.0.0.1:8000/api/product/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async create(data)
  {
    Axios.post(`http://127.0.0.1:8000/api/product`, data, {headers: {'Content-Type': 'multipart/form-data' }})
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async update(id, data)
  {
    Axios.put(`http://127.0.0.1:8000/api/product/${id}`, data, {headers: {'Content-Type': 'multipart/form-data' }})
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async delete(id)
  {
    Axios.delete(`http://127.0.0.1:8000/api/product/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async delete(id)
  {
    Axios.delete(`http://127.0.0.1:8000/api/product/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
}