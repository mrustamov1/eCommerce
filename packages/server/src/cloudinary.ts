import { v2 as cloudinary } from "cloudinary";

// Configuration

const imagesId = ["airpod2_eu1yip", "airpods_ecci7w", "airpod3_oh25oe"];

cloudinary.config({
  cloud_name: "dqnoa1wxt",
  api_key: "898698874959815",
  api_secret: "ku0GYWsS9sKYStM1pTJEgUcH-6w",
  secure: true,
});

imagesId.forEach((image) => {
  const url = cloudinary.url(image);
  console.log(url);
});
