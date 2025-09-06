import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useDataStore = defineStore('counter', () => {
const users=ref([
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "123-456-7890",
    "address": "123 Elm Street, Springfield, IL",
    "signup_date": "2023-05-12",
    "password":"12345"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob@example.com",
    "phone": "555-123-4567",
    "address": "456 Oak Street, Lincoln, NE",
    "signup_date": "2023-06-01",
    "password":"12345"
  }
])
const categories=ref([
  { "id": 1, "name": "Electronics" },
  { "id": 2, "name": "Clothing" },
  { "id": 3, "name": "Home & Kitchen" }
])
const products=[
  {
    "id": 101,
    "name": "Wireless Earbuds",
    "description": "Bluetooth 5.0 earbuds with noise cancellation",
    "category": "Electronics",
    "price": 49.99,
    "discount": 10,
    "stock_quantity": 150,
    "sku": "ELEC-WEB-101",
    "rating": 4.5,
    "image_url": "https://example.com/images/earbuds.jpg"
  },
  {
    "id": 102,
    "name": "Men's Cotton T-Shirt",
    "description": "100% cotton, available in various sizes",
    "category": "Clothing",
    "price": 19.99,
    "discount": 5,
    "stock_quantity": 300,
    "sku": "CLOTH-MTS-102",
    "rating": 4.2,
    "image_url": "https://example.com/images/tshirt.jpg"
  }
]
const orders=[
  {
    "order_id": 5001,
    "user_id": 1,
    "order_date": "2023-09-01",
    "status": "Shipped",
    "total_amount": 64.98,
    "shipping_address": "123 Elm Street, Springfield, IL"
  }
]
const orderItem=[
  {
    "order_item_id": 1,
    "order_id": 5001,
    "product_id": 101,
    "quantity": 1,
    "unit_price": 44.99,
    "subtotal": 44.99
  },
  {
    "order_item_id": 2,
    "order_id": 5001,
    "product_id": 102,
    "quantity": 1,
    "unit_price": 19.99,
    "subtotal": 19.99
  }
]
const reviews=[
  {
    "review_id": 301,
    "product_id": 101,
    "user_id": 1,
    "rating": 5,
    "comment": "Great sound quality and battery life!",
    "date": "2023-09-05"
  },
  {
    "review_id": 302,
    "product_id": 102,
    "user_id": 2,
    "rating": 4,
    "comment": "Comfortable and fits well.",
    "date": "2023-09-06"
  }
]
  return { users,categories,products,orders,orderItem, reviews }
})
