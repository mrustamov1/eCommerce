import { v2 as cloudinary } from "cloudinary";

// Configuration

// const imagesId = ["airpod2_eu1yip", "airpods_ecci7w", "airpod3_oh25oe"];
const newImages = [
//   "pro4_bwbyav",
//   "pro1_z3cdey",
//   "pro3_yr7h6e",
//   "pro_r9tggy",
//   "mic4_jbjdkp",
//   "mic3_k9qkt8",
//   "mic2_z2zsah",
//   "head4_ugwzow",
//   "mic1_frjosv",
//   "head3_isctux",
//   "head1_wa4sfa",
//   "head2_po5rtf",
// "package_ozuula",
// "pickup_qizsod",
// "apple-music_t5rr0d"
"product1_kojlmm",
"product2_tthlux",
"product3_llds1o",
"product4_moxthd",
"product5_qrm98s"

];

cloudinary.config({
  cloud_name: "dqnoa1wxt",
  api_key: "898698874959815",
  api_secret: "ku0GYWsS9sKYStM1pTJEgUcH-6w",
  secure: true,
});

newImages.forEach((image) => {
  const url = cloudinary.url(image);
  console.log(url);
});
