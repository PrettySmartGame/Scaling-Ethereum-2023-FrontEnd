import { useRef, useEffect, useState } from "react";

const PaintCanvas = ({ width, height, color, lineWidth, tool, imageUrl }) => {
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext("2d");
      setContext(canvasContext);
    }
  }, []);

  // Add this function to draw an image on the canvas
  const drawImage = () => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      context.drawImage(img, 0, 0, width, height);
    };
  };

  // Call the drawImage function in the useEffect hook when the context is set
  useEffect(() => {
    if (context) {
      drawImage();
    }
  }, [context]);

  const startPaint = (event) => {
    setIsPainting(true);
    draw(event);
  };

  const endPaint = () => {
    setIsPainting(false);
    context.beginPath();
  };

  const draw = (event) => {
    if (!isPainting) return;
    context.lineCap = "round";
    context.fillStyle = color;

    const toolLineWidth =
      tool === "brush"
        ? lineWidth * 3
        : tool === "eraser"
        ? lineWidth * 2
        : lineWidth;
    context.lineWidth = toolLineWidth;
    context.strokeStyle = color;

    if (tool === "pen" || tool === "brush") {
      context.globalCompositeOperation = "source-over";
      const canvasBounds = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - canvasBounds.left;
      const y = event.clientY - canvasBounds.top;
      context.lineTo(x, y);
      context.stroke();
    } else if (tool === "spray") {
      context.globalCompositeOperation = "source-over";
      const sprayRadius = toolLineWidth * 2;
      for (let i = 0; i < 30; i++) {
        const offsetX = Math.random() * sprayRadius * 2 - sprayRadius;
        const offsetY = Math.random() * sprayRadius * 2 - sprayRadius;
        context.fillRect(
          event.clientX + offsetX,
          event.clientY + offsetY,
          1,
          1
        );
      }
    } else if (tool === "eraser") {
      context.globalCompositeOperation = "destination-out";
      const canvasBounds = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - canvasBounds.left;
      const y = event.clientY - canvasBounds.top;
      context.lineTo(x, y);
      context.stroke();
    }

    context.beginPath();
    const canvasBounds = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - canvasBounds.left;
    const y = event.clientY - canvasBounds.top;
    context.moveTo(x, y);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={startPaint}
        onMouseUp={endPaint}
        onMouseMove={draw}
        onMouseLeave={endPaint}
      />
      <style jsx>{`
        canvas {
          background-color: white;
        }
      `}</style>
    </>
  );
};

export default PaintCanvas;
