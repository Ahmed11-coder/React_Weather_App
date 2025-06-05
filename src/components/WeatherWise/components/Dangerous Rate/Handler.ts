import { Point } from "types/types";

export const getDangPoint = (t: number, points: Point[]): Point[] => {
    const [P0, P1, P2] = points;

    const Qx = (1 - t)*P0.x + t*P1.x;
    const Qy = (1 - t)*P0.y + t*P1.y;

    const RX = ((1 - t)*Qx + (t - Math.pow(t, 2))*P1.x + (Math.pow(t, 2))*P2.x) - P0.x;
    const Ry = ((1 - t)*Qy + (t - Math.pow(t, 2))*P1.y + (Math.pow(t, 2))*P2.y) - P0.y;

    return [{x: RX, y: Ry}, {x: (Qx - P0.x), y: (Qy - P0.y)}];
}