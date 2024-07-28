/// <reference types="vite/client" />

declare module "*.png" {
  const path: string;
  export default path;
}

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.jpge" {
  const path: string;
  export default path;
}
