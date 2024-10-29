import axios from "axios";

const allProductUrl = process.env.NEXT_PUBLIC_API_URL;
export const getAllProduct = () => {
    return axios.get(allProductUrl);
};

// const instance = axios.create({
//   maxContentLength: Infinity, 
// });

// export const getAllProduct = () => {
//     return instance.get(process.env.NEXT_PUBLIC_API_URL,{
//       params: {
//         _limit: 10, 
//         _page: 1 
//       }});
// };