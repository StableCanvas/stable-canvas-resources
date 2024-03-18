export namespace CivitaiAllDataInfoItem {
  export type Document = {
    postId: number;
    modelVersionId: number;
    publishedAt: Date;
    createdAt: Date;
    user: User;
    images: Image[];
    review: Review | null;
  };

  export type Image = {
    id: number;
    name: null | string;
    url: string;
    nsfw: boolean;
    width: number;
    height: number;
    hash: string;
    meta: Meta | null;
    hideMeta: boolean;
    generationProcess: GenerationProcess | null;
    createdAt: Date;
    mimeType: MIMEType | null;
    scannedAt: Date;
    needsReview: boolean;
    postId: number;
    index: number;
    publishedAt: Date;
    modelVersionId: number;
    cursorId: string;
    user: User;
    stats: Stats;
    reactions: any[];
    tags: null;
  };

  export type GenerationProcess = "txt2img" | "txt2imgHiRes" | "inpainting";

  export type Meta = {
    ENSD?: string;
    Size: Size;
    seed: number;
    Model?: string;
    steps: number;
    prompt: string;
    sampler: Sampler;
    cfgScale: number;
    "Clip skip"?: string;
    resources: Resource[];
    "Model hash": string;
    negativePrompt: string;
    "Cutoff strong"?: CutoffStrong;
    "Cutoff weight"?: string;
    "Hires upscale"?: string;
    "Cutoff enabled"?: Cutoff;
    "Cutoff padding"?: CutoffPadding;
    "Cutoff targets"?: string;
    "Hires upscaler"?: HiresUpscaler;
    "Denoising strength"?: string;
    "Cutoff interpolation"?: CutoffInterpolation;
    "Cutoff disable_for_neg"?: Cutoff;
    "Mask blur"?: string;
    "Noise multiplier"?: string;
    "Hires steps"?: string;
    "Face restoration"?: string;
    hashes?: Hashes;
  };

  export type Cutoff = "True";

  export type CutoffInterpolation = "lerp";

  export type CutoffPadding = "_</w>";

  export type CutoffStrong = "False";

  export type HiresUpscaler = "Latent" | "R-ESRGAN 4x+ Anime6B" | "ESRGAN_4x";

  export type Size =
    | "512x1024"
    | "552x792"
    | "512x744"
    | "512x512"
    | "512x768"
    | "1024x1536";

  export type Hashes = {
    model: string;
  };

  export type Resource = {
    name: string;
    type: Type;
    weight?: number;
    hash?: string;
  };

  export type Type = "lora" | "model";

  export type Sampler =
    | "Euler a"
    | "DPM++ SDE Karras"
    | "Euler"
    | "DPM++ 2M Karras";

  export type MIMEType = "image/png" | "image/jpeg";

  export type Stats = {
    cryCountAllTime: number;
    laughCountAllTime: number;
    likeCountAllTime: number;
    dislikeCountAllTime: number;
    heartCountAllTime: number;
    commentCountAllTime: number;
  };

  export type User = {
    id: number;
    username: string;
    image: null | string;
    deletedAt: null;
    cosmetics: CosmeticElement[];
  };

  export type CosmeticElement = {
    cosmetic: CosmeticCosmetic;
  };

  export type CosmeticCosmetic = {
    id: number;
    data: Data;
    type: string;
    source: string;
    name: string;
  };

  export type Data = {
    url?: string;
    variant?: string;
    gradient?: Gradient;
  };

  export type Gradient = {
    to: string;
    deg: number;
    from: string;
  };

  export type Review = {
    rating: number;
    details: null | string;
    id: number;
  };
}

export namespace CivitaiAllDataIndexItem {
  export type Root = {
    id: number;
    name: string;
    type: string;
    nsfw: boolean;
    status: string;
    createdAt: Date;
    lastVersionAt: Date;
    locked: boolean;
    rank: Rank;
    user: User;
    hashes: string[];
    image: Image;
    earlyAccess?: boolean;
    earlyAccessDeadline?: null;
  };

  export type Image = {
    id: number;
    userId: number;
    name: null | string;
    url: string;
    nsfw: boolean;
    width: number;
    height: number;
    hash: string;
    modelVersionId: number;
  };

  export type Rank = {
    downloadCount: number;
    favoriteCount: number;
    commentCount: number;
    ratingCount: number;
    rating: number;
  };

  export type User = {
    id: number;
    username: string;
    deletedAt: null;
    image: null | string;
  };
}

export namespace PickUpIndexItem {
    export type Root {
        id: number;
        name: string;
        type: string;
        createdAt: string;
        user_id: number;
        user_name: string;
        hashes: string[];
        image: string;
    }
}
