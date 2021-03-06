import iphone11Image from "../assets/iphone11.jpg";
import motoG9PlayImage from "../assets/moto_g9_play.jpg";
import SamsungGalaxyA32Image from "../assets/samsung_galaxy_A32.jpg";
import SamsungGalaxyNote20Image from "../assets/samsung_galaxy_note_20.jpg";
import Xiaomi11TImage from "../assets/xiaomi_11T.jpg";
import XiaomiMi11UltraImage from "../assets/xiaomi_mi_11_ultra.jpg";
import MotorolaEdge20LiteImage from "../assets/motorola_edge_20_lite.jpg";
import SamsungGalaxyA72Image from "../assets/samsung_galaxy_A72.jpg";
import XiaomiRedmiNote10Image from "../assets/xiaomi_redmi_note_10_pro.jpg";
import iPhone12Image from "../assets/iphone12.jpg";
import uniqid from "uniqid";

const data = {
    productItems: [
        {
            id: uniqid(),
            name: "iPhone 11",
            price: 999,
            image: iphone11Image,
        },
        {
            id: uniqid(),
            name: "Moto G9 Play",
            price: 999,
            image: motoG9PlayImage,
        },
        {
            id: uniqid(),
            name: "Samsung Galaxy A32",
            price: 999,
            image: SamsungGalaxyA32Image,
        },
        {
            id: uniqid(),
            name: "Samsung Galaxy Note 20",
            price: 999,
            image: SamsungGalaxyNote20Image,
        },
        {
            id: uniqid(),
            name: "Xiaomi 11T",
            price: 999,
            image: Xiaomi11TImage,
        },
        {
            id: uniqid(),
            name: "Xiaomi Mi 11 Ultra",
            price: 999,
            image: XiaomiMi11UltraImage,
        },
        {
            id: uniqid(),
            name: "Motorola Edge 20 Lite",
            price: 999,
            image: MotorolaEdge20LiteImage,
        },
        {
            id: uniqid(),
            name: "Samsung Galaxy A72",
            price: 999,
            image: SamsungGalaxyA72Image,
        },
        {
            id: uniqid(),
            name: "Xiaomi Redmi Note 10 Pro",
            price: 999,
            image: XiaomiRedmiNote10Image,
        },
        {
            id: uniqid(),
            name: "iPhone 12",
            price: 999,
            image: iPhone12Image,
        },
    ],
};

export default data;
