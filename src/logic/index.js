import { DepthAlgorithm } from "./depthAlgorithm.js";
import { World } from "./world.js";

let newWorld = new World();
newWorld.fillWorld();
const algorithm = new DepthAlgorithm(newWorld.getWorld(), 1);
const solution = algorithm.start();
