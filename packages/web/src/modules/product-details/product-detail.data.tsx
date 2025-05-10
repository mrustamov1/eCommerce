import { Images } from "../../assets/image";
import { ProductType } from "../../types/product.type";

export const data: ProductType[] = [
  {
    id: 1,
    images: [Images.airpod, Images.pro, Images.pro1, Images.pro3, Images.pro4],
    title: "Beats Studio Pro",
    subTitle: "Iconic Sound",
    price: "$349.99",
    highlight: "Up to 40 hours of battery life",
    deliveryInfo: [
      {
        image: Images.box,
        title: "Free Shipping and Returns",
        subTitle: "Enjoy free 2-day delivery and 14-day returns.",
      },
      {
        image: Images.pickup,
        title: "In-store pickup",
        subTitle: "Pick up your Beats at an Apple Store near you.",
      },
      {
        image: Images.music,
        title: "Free Apple Music trial",
        subTitle: "Get 3 months of access to over 100 million songs, ad-free.6",
      },
    ],
  },
  {
    id: 2,
    images: [
      Images.airpod2,
      Images.head1,
      Images.head2,
      Images.head3,
      Images.head4,
    ],
    title: "Beats Studio Pro",
    subTitle: "Iconic Sound",
    price: "$349.99",
    highlight: "Up to 40 hours of battery life",
    deliveryInfo: [
      {
        image: Images.box,
        title: "Free Shipping and Returns",
        subTitle: "Enjoy free 2-day delivery and 14-day returns.",
      },
      {
        image: Images.pickup,
        title: "In-store pickup",
        subTitle: "Pick up your Beats at an Apple Store near you.",
      },
      {
        image: Images.music,
        title: "Free Apple Music trial",
        subTitle: "Get 3 months of access to over 100 million songs, ad-free.6",
      },
    ],
  },
  {
    id: 3,
    images: [
      Images.airpod3,
      Images.mic1,
      Images.mic2,
      Images.mic3,
      Images.mic4,
    ],
    title: "Beats Pill",
    subTitle: "Seriously loud.",
    price: "$149.99",
    highlight: "Up to 40 hours of battery life",
    deliveryInfo: [
      {
        image: Images.box,
        title: "Free Shipping and Returns",
        subTitle: "Enjoy free 2-day delivery and 14-day returns.",
      },
      {
        image: Images.pickup,
        title: "In-store pickup",
        subTitle: "Pick up your Beats at an Apple Store near you.",
      },
      {
        image: Images.music,
        title: "Free Apple Music trial",
        subTitle: "Get 3 months of access to over 100 million songs, ad-free.6",
      },
    ],
  },
];
