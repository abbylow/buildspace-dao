import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x92ca67Ca67f1D27BeeAe3BAe0647BdEEBC187867");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Pompon Little Daisy",
        description: "This NFT will give you access to PomponDAO!",
        image: readFileSync("scripts/assets/daisy.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
