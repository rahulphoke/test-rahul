export const categoryMock ={
    "categories": [
      {
        "id": 1,
        "name": "Category 1",
        "products": [
          {
            "id": 1,
            "name": "Product 1",
            "price": "30"
          },
          {
            "id": 2,
            "name": "Product 2",
            "price": "40"
          }
        ]
      },
      {
        "id": 2,
        "name": "Category 2",
        "products": [
          {
            "id": 3,
            "name": "Product 3",
            "price": "50"
          },
          {
            "id": 4,
            "name": "Product 4",
            "price": "60"
          }
        ]
      },
      {
        "id": 3,
        "name": "Category 3",
        "products": [
          {
            "id": 5,
            "name": "Product 5",
            "price": "70"
          }
        ]
      },
      {
        "id": 4,
        "name": "Category 4",
        "products": [
          {
            "id": 6,
            "name": "Product 6",
            "price": "80"
          }
        ]
      }
    ]
  }

  export interface ICategory {
    id: number;
    name: string;
    products: IProduct[];
  }
  
  export interface IProduct {
    id: number;
    name: string;
    price: string;
  }
  