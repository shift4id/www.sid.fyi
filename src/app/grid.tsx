import { useRef } from "react";

function Cell({ background }: { background: string }) {
  return <div style={{ background }} className="h-1" />;
}

export function Grid<Color extends number>({
  grid,
  colorMap,
}: {
  grid: Color[][];
  colorMap: Record<Color, string>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const columns = grid[0].length;

  return (
    <div
      ref={ref}
      className="grid"
      style={{
        width: `calc(var(--spacing) * ${columns})`,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <Cell
            background={colorMap[cell]}
            // eslint-disable-next-line react/no-array-index-key
            key={`${rowIndex}-${cellIndex}`}
          />
        )),
      )}
    </div>
  );
}

// const ANIMATIONS = [MARIO_THREE, MARIO_FOUR, MARIO_TWO];

// export function AllMarios() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [frame, setFrame] = useState(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Set up canvas scaling for crisp pixel art
//     ctx.imageSmoothingEnabled = false;

//     const drawMario = (mario: MarioArray) => {
//       // Clear canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const pixelSize = 8; // Size of each pixel
//       const offsetX = (canvas.width - mario[0].length * pixelSize) / 2;
//       const offsetY = (canvas.height - mario.length * pixelSize) / 2;

//       mario.forEach((row, rowIndex) => {
//         row.forEach((cell, cellIndex) => {
//           if (cell !== 0) {
//             ctx.fillStyle = COLOR_MAP[cell];
//             ctx.fillRect(
//               offsetX + cellIndex * pixelSize,
//               offsetY + rowIndex * pixelSize,
//               pixelSize,
//               pixelSize,
//             );
//           }
//         });
//       });
//     };

//     let timeoutId: NodeJS.Timeout | undefined;
//     let animationId: number | undefined;

//     const animate = () => {
//       drawMario(ANIMATIONS[frame]);

//       // Change frame every 200ms
//       timeoutId = setTimeout(() => {
//         setFrame((prev) => (prev + 1) % ANIMATIONS.length);
//         animationId = requestAnimationFrame(animate);
//       }, 1000 / 5);
//     };

//     // Start animation
//     animationId = requestAnimationFrame(animate);

//     // Cleanup
//     return () => {
//       if (animationId) cancelAnimationFrame(animationId);
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [frame]);

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         width={200}
//         height={200}
//         className="block border"
//         style={{ imageRendering: "pixelated" }}
//       />
//     </div>
//   );
// }
