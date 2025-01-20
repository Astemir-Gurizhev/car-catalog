import axios from "axios";
import { ICar } from '../types/car.interface'
export const CarService = {
  async getAll() {
    const response = await axios.get<ICar[]>("...API");
    return response.data;
  },

  async getById(id: string) {
    const response = await axios.get<ICar[]>(`...API?id=${id}`);
    return response.data[0];
  },
};
