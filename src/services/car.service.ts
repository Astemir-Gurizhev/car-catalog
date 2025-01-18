import axios from "axios";
export const CarService = {
    async getAll() {
        const response = await axios.get("...API");
        return response.data
    }
}