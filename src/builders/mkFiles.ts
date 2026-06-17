import { writeFileSync } from "fs";
import * as path from "node:path";
import { Tweak } from "./Tweak";

const tweakfileP = path.join("build", "tweakfile");

export async function mkFiles() {
    writeFileSync(tweakfileP, Tweak.toString());
    console.log(`Maked ${tweakfileP}`);
}
