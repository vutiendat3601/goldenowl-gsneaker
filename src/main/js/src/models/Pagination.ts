interface Pagination<T> {
  items: T[];
  numOfItems: number;
  totalItems: number;
  pageNum: number;
  pageSize: number;
  totalPages: number;
}

export type { Pagination };
