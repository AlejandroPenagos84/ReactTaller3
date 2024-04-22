import axios from "axios";

export async function getProducts(): Promise<any> {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response;
}

export async function getProduct(id:string | string[]):Promise<any> {
  const url = `https://fakestoreapi.com/products/${id}`;
  const response = await axios.get(url);
  return response;
}