"use client";

import { MainLayout } from "@/layouts";
import { useParams } from "next/navigation";
import { FakeProduct } from "@/types/fakeProduct";
import { useEffect, useState } from "react";
import { getProduct } from "@/services/prodcts";

export default function ProductDetail() {
  const params = useParams();
  const { id_product } = params;
  const [product, setProduct] = useState<FakeProduct>();

  console.log(id_product);
  function getSingleProduct() {
    getProduct(id_product)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <MainLayout>
      <div className="flex items-center">
        <div className="flex flex-col items-center p-[20px] justify-center">
          <h1 className="text-5xl font-bold text-medium-blue">{product?.title}</h1>

          <div className="flex pt-[40px]">
            <img
              className="w-[300px] mr-[200px]" // Añadido margen derecho para separar la imagen de los otros elementos
              src={product?.image}
              alt={product?.title}
            />

            {/* Este contenedor es donde se encuentran los detalles del producto */}
            <div className="flex flex-col justify-center">
              {/* Sección para la categoría */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-medium-blue">Categoría</h2>
                <p className="text-2xl text-black">{product?.category}</p>
              </div>

              {/* Sección para el precio */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-medium-blue">Precio</h2>
                <p className="text-2xl text-black">{product?.price}</p>
              </div>

              {/* Sección para el rating */}
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-medium-blue">Rating</h2>
                <p className="text-2xl text-black">{product?.rating?.rate}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col mb-4 p-[40px]">
              <h2 className="text-3xl font-bold text-medium-blue">Descripción</h2>
              <p className="text-2xl text-black">{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
