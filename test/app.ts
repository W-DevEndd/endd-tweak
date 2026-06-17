
import "../";
import { Option, Section } from "../";

const blocks = Section.register("Blocks");

blocks.addOption(Option.bool(
    {
        name: "Full Grass",
        imagePath: "https://google.com",
    }, true, "aaaaa",
));
