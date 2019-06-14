import Axios from 'axios';

export default class ProductService {
  static async getAll()
  {
    return Axios.get("http://127.0.0.1:8000/api/products")
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async getById(id)
  {
    return Axios.get(`http://127.0.0.1:8000/api/product/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async create(data)
  {
    return Axios.post(`http://127.0.0.1:8000/api/product`, data, {headers: {'Content-Type': 'multipart/form-data' }})
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async update(id, data)
  {
    return Axios.put(`http://127.0.0.1:8000/api/product/${id}`, data, {headers: {'Content-Type': 'multipart/form-data' }})
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async delete(id)
  {
    return Axios.delete(`http://127.0.0.1:8000/api/product/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async visited(id)
  {
    return Axios.delete(`http://127.0.0.1:8000/api/visit/${id}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  static async getByPopularity()
  {
    return Axios.get(`http://127.0.0.1:8000/api/products/popular`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
}