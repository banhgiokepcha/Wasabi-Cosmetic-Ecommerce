import API from "./api";
import { Product } from "../types/product";

// interface GetProduct {
//     product: product[],
//     totalProduct: number,
// }

export default class BackendAPI extends API {
    constructor() {
        super();
    }

    public getProduct = async (): Promise<Product[]> => {
        const res = await this.get('/product');
        return res.data;
    }
};