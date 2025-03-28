import API from "./api";
import { Product } from "../types/types";


export default class BackendAPI extends API {
    constructor() {
        super();
    }

    public getProduct = async (): Promise<Product[]> => {
        const res = await this.get('/product');
        return res.data;
    }

    public getProductBySlug = async (slug: string): Promise<Product> => {        
        const res = await this.get(`/product/${slug}`);
        return res.data;
    }   
};