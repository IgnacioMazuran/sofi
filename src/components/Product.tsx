import React from "react";

import Divider from "./Divider";

const Product = ({ products }: any) => {
  return (
    <section className={`bg-gradient-to-r from-red-300 via-pink-300 to-pink-400 py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
          {products?.title.includes("Felices") && (
            <>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #a67efc, #6a4cfc)", // Gradiente morado
                  color: "transparent", // Hacer que el texto sea transparente
                  backgroundClip: "text", // Asegura que el gradiente se aplique solo al texto
                  WebkitBackgroundClip: "text", // Compatibilidad con Safari
                }}
              >
                Na Mentira...
              </span>
              <br />
            </>
          )}
          {products?.title?.split(" ").map((word: any, index: number) => (
            <>
              <span key={index} className={index % 2 ? "text-primary" : "text-border"}>
                {word}{" "}
              </span>
            </>
          ))}
        </h1>
        <Divider />
        {products?.items?.map((p: any, index: number) => (
          <div
            key={index}
            className={`flex flex-wrap ${index % 2 === 0 ? "flex-row" : "flex-col-reverse sm:flex-row"}`} // Toggle direction
          >
            <div className={`w-full sm:w-1/2 p-6 ${index % 2 === 0 ? "order-1" : "order-2 mt-20"}`}>
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{p?.title}</h3>
              <p className="text-gray-600">{p?.description}</p>
            </div>

            <div className={`w-full sm:w-1/2 p-6 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
              <img className="h-6/6" src={p?.img} alt={p?.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
