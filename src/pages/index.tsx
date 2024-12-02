import React, { useEffect } from "react";
import About from "../components/About";
import Canvas from "../components/Canvas";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import Product from "../components/Product";
import config from "../config/index.json";

const App = () => {
  const { product } = config;
  const chunkSize = Math.ceil(product.items.length / 3); // Calculate the chunk size
  const group1 = {
    ...product, // Copy all properties of `product`
    items: product.items.slice(0, chunkSize),
  }; // First chunk
  const group2 = {
    title: "Te Amo", // Copy all properties of `product`
    items: product.items.slice(chunkSize, chunkSize * 2),
  }; // Second chunk
  const group3 = {
    title: "Que sean mil años mas ❤️", // Copy all properties of `product`
    items: product.items.slice(chunkSize * 2),
  }; // Third chunk

  useEffect(() => {
    // Inject the fadeOut animation CSS into the document head
    const fadeOutStyles = `
      @keyframes fadeOut {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0.5);
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = fadeOutStyles;
    document.head.appendChild(styleSheet);

    const handleMouseMove = (e: any) => {
      const emoji = document.createElement("div");
      emoji.textContent = "❤";
      emoji.style.position = "absolute";
      emoji.style.left = `${e.pageX}px`;
      emoji.style.top = `${e.pageY}px`;
      emoji.style.fontSize = "20px"; // Emoji size
      emoji.style.pointerEvents = "none"; // Avoid interaction with cursor
      emoji.style.animation = "fadeOut 1s ease forwards";

      document.body.appendChild(emoji);

      // Remove the emoji after the animation ends
      setTimeout(() => {
        document.body.removeChild(emoji);
      }, 1000);
    };

    // Add the mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener and styles when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div className={`relative z-10 pb-2 bg-background sm:pb-2 md:pb-2 lg:max-w-2xl lg:w-full lg:pb-12 xl:pb-16`}>
            <Header />
          </div>
        </div>
      </div>

      <div
        className="video-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(135deg, #f8b500, #ff6f91)", // Gradient background
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/4J9PDsiaGOY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            width: "100%",
            maxWidth: "560px",
            height: "315px",
          }}
        ></iframe>
        <h3
          style={{
            marginTop: "10px",
            fontSize: "1.5rem",
            color: "#333",
            textAlign: "center",
            fontWeight: 600,
            letterSpacing: "1px",
            lineHeight: "1.4",
          }}
        >
          FELIZ CUMPLE AMOR!!!!!!!!!
        </h3>
      </div>

      <Canvas />
      {/* LOS ATAJOS DE ARRIBA PODRIAN MOSTRAR LOS REGALOS QUE HAGA: cosito talones, perfume, potre  */}

      <LazyShow>
        <>
          <Product products={group1} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Features /> */}
          <Product products={group2} />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Product products={group3} />
          <Canvas />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
