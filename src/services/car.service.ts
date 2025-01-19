import axios from "axios";
export const CarService = {
  async getAll() {
    const response = await axios.get("...API");
    return response.data;
  },

  async getById(id: number) {
    const response = await axios.get(`...API?id=${id}`);
    return response.data[0];
  },
};
