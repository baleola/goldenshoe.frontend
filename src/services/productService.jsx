import axios from "axios";

export default {
  getAll: async () => {
    const res = await axios.get("http://localhost:5000/products");
    return res.data || [];
  },
  getById: async id => {
    const res = await axios.get(`http://localhost:5000/products/${id}`);
    return res.data || [];
  }
};
