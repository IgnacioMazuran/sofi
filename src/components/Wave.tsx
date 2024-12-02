import { FC, useState, useEffect } from 'react';
import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';

class Heart {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 35 + 35; // Tamaño más grande entre 20 y 40
    this.speedY = Math.random() * 1 + 0.5; // Aumentamos la velocidad para que se muevan más visibles
    this.speedX = (Math.random() - 0.5) * 2; // Movimiento lateral aleatorio
    this.opacity = 1; // Opacidad inicial
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.globalAlpha = this.opacity;
    context.fillStyle = 'rgba(255, 0, 0, 1)'; // Rojo para los corazones
    context.beginPath();
    context.moveTo(this.x, this.y);
    // Dibujar una forma de corazón simplificada con curvas de Bézier
    context.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
    context.bezierCurveTo(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
    context.fill();
    context.restore();
  }

  update() {
    this.y -= this.speedY; // Los corazones suben
    this.x += this.speedX; // Movimiento lateral
    this.opacity -= 0.001; // Desaparecen más lentamente
  }

  isVisible() {
    return this.opacity > 0; // El corazón sigue visible mientras la opacidad sea mayor que 0
  }
}

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600; // Altura del canvas
  const [hearts, setHearts] = useState<Heart[]>([]);

  const render = () => {
    context?.clearRect(0, 0, width, height); // Limpiar el canvas en cada frame

    // Generar nuevos corazones
    if (Math.random() < 0.1) { // Probabilidad reducida para evitar demasiados corazones
      const heart = new Heart(Math.random() * width, height); // Posición aleatoria horizontal
      setHearts((prevHearts) => [...prevHearts, heart]);
    }

    // Dibujar y actualizar corazones
    setHearts((prevHearts) =>
      prevHearts
        .filter((heart) => heart.isVisible()) // Solo corazones visibles
        .map((heart) => {
          heart.update(); // Actualizar su posición y opacidad
          heart.draw(context!); // Dibujar el corazón
          return heart;
        })
    );

    requestAnimationFrame(render); // Continuar la animación
  };

  useEffect(() => {
    if (context) render(); // Iniciar la animación cuando el contexto esté listo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);

  return null; // No renderizamos nada directamente
};

export default Wave;
