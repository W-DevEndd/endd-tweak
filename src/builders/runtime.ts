import { mkFiles } from "./mkFiles";

process.on("beforeExit", async () => {
    mkFiles();
})
