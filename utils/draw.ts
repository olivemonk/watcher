import { DetectedObject } from "@tensorflow-models/coco-ssd";

export function drawOnCanvas(
  mirrored: boolean,
  predictions: DetectedObject[],
  ctx: CanvasRenderingContext2D | null | undefined
) {
  predictions.forEach((detectedObject: DetectedObject) => {
    const { bbox, score, class: name } = detectedObject;
    const [x, y, width, height] = bbox;

    if (ctx) {
      ctx.beginPath();

      ctx.fillStyle = name === "person" ? "#FF0F0F" : "#00B612";
      ctx.globalAlpha = 0.4;

      mirrored
        ? ctx.roundRect(ctx.canvas.width - x, y, -width, height, 8)
        : ctx.roundRect(x, y, width, height, 8);

      // draw the bounding box
      ctx.fill();

      ctx.font = "12px Courier New";
      ctx.fillStyle = "black";
      ctx.globalAlpha = 1;

      mirrored
        ? ctx.fillText(name, ctx.canvas.width - x - width + 10, y + 20)
        : ctx.fillText(name, x + 10, y + 20);
    }
  });
}
