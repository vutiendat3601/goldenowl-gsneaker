import { Pagination } from '../models/Pagination';
import { Product } from '../models/Product';
import { api } from '../utils/axios';

const productService = {
  async getProducts(
    pageNum: number = 0,
    pageSize: number = 10,
    q: string = ''
  ): Promise<Pagination<Product>> {
    const API_ARTIST_TOP_TRACK_GET = `/v1/products?pageNum=${pageNum}&pageSize=${pageSize}&q=${q}`;
    const resp = await api.get(API_ARTIST_TOP_TRACK_GET);
    if (resp.data.status === 'error') {
    }
    return resp.data as Pagination<Product>;
  },
};

export default productService;
