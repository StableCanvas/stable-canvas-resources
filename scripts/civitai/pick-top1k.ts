// 从civitai_all_data_info.json中获取前top1k的lora name和对应的hash

import { readJsonlFile } from "../readJsonl";
import fs from "fs";
import path from "path";
import { CivitaiAllDataIndexItem, PickUpIndexItem } from "../types";

const file_version = "v01";

const filepath = path.join(
  process.cwd(),
  "_local",
  "civitai_all_data_index.jsonl"
);

const covert_to_short = (item: CivitaiAllDataIndexItem.Root) => {
  return {
    id: item.id,
    name: item.name,
    type: item.type,
    createdAt: item.createdAt as any,
    user_id: item.user.id,
    user_name: item.user.username,
    hashes: item.hashes,
    image: item.image.url,
  } as PickUpIndexItem.Root;
};

const main = async () => {
  const all_models = [] as PickUpIndexItem.Root[];
  for await (const item of readJsonlFile<CivitaiAllDataIndexItem.Root>(
    filepath
  )) {
    all_models.push(covert_to_short(item));
  }

  const write_jsonl = (filename: string, items: any[]) => {
    fs.writeFileSync(
      path.join(
        process.cwd(),
        "civitai-index",
        file_version,
        `${filename}.jsonl`
      ),
      items.map((x) => JSON.stringify(x)).join("\n")
    );
  };

  // write all_short_items.jsonl
  write_jsonl(`all_models.${file_version}`, all_models);

  // pick 1k lora
  const lora_1k = all_models.filter((x) => x.type === "LORA").slice(0, 1000);
  write_jsonl(`lora_1k.${file_version}`, lora_1k);
  // pick 1k checkpoint
  const ckp_1k = all_models
    .filter((x) => x.type === "Checkpoint")
    .slice(0, 1000);
  write_jsonl(`ckp_1k.${file_version}`, ckp_1k);

  console.log("done.");
};

main().catch(console.error);
