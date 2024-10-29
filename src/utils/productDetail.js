import axios from "axios";

const ProductDetailUrl = process.env.NEXT_PUBLIC_API_URL;
export const getProductDetail = (id) => {
    return axios.get(`${ProductDetailUrl}/${id}`);
};