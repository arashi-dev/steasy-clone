import { type ImageProps } from "next/image"

import GreenImage1 from "./_images/Green-Pepper_01__2x_ee125348-3ccd-483f-a9e4-4b1d323b4708.webp"
import GreenImage2 from "./_images/Green-Pepper_02__2x_f3cecfa0-091e-4534-b952-f456078ad2db.webp"
import GreenImage3 from "./_images/Green-Pepper_03__2x_824c57d7-8b21-44e0-98f1-9a50f3ddd930.webp"
import GreenImage4 from "./_images/Green-Pepper_04__2x_1fd1758b-8575-4c19-b5a7-bc5623bc001e.webp"

import PurpleImage1 from "./_images/Purple-ginger_01__2x_7e0fcad5-6b04-431e-abe6-b3fa203303d4.webp"
import PurpleImage2 from "./_images/Purple-ginger_02__2x_3f826f3f-86aa-4533-b645-ef5a333b5e41.webp"
import PurpleImage3 from "./_images/Purple-ginger_03__2x_73144c97-a588-47b3-813b-0f425a30ee08.webp"
import PurpleImage4 from "./_images/Purple-ginger_04__2x_ea651e59-e378-4e79-802d-a58ffdfab647.webp"

import LavaSaltImage1 from "./_images/Lava-Salt_01__2x_e6cd7ae5-5b09-4e06-92d8-00c90fc77602.webp"
import LavaSaltImage2 from "./_images/Lava-Salt_02__2x_8ba7afe8-42d7-41fd-8e8c-e06b7b41ad76.webp"
import LavaSaltImage3 from "./_images/Lava-Salt_03__2x_08523099-b1aa-4d09-ba24-948f69a0c8a0.webp"
import LavaSaltImage4 from "./_images/Lava-Salt_04__2x_3f9863bf-7ea0-4502-a76e-5878ca3342ff.webp"

export type Variant = {
    id: string;
    color: {
        name: string;
        hex: string;
    };
    price: number;
    images: ImageProps["src"][]
}

export const variants: Variant[] = [
    {
        id: "1",
        color: {
            name: "Green Pepper",
            hex: "#617864"
        },
        price: 299,
        images: [
            GreenImage1,
            GreenImage2,
            GreenImage3,
            GreenImage4
        ]
    },
    {
        id: "2",
        color: {
            name: "Lava Salt",
            hex: "#4C4A44"
        },
        price: 299,
        images: [
            PurpleImage1,
            PurpleImage2,
            PurpleImage3,
            PurpleImage4
        ]
    },
    {
        id: "3",
        color: {
            name: "Purple Ginger",
            hex: "#55334A"
        },
        price: 299,
        images: [
            LavaSaltImage1,
            LavaSaltImage2,
            LavaSaltImage3,
            LavaSaltImage4
        ]
    },
]

export const findVariantById = (id: string) => variants.find(variant => variant.id === id)

export type AddOn = {
    id: string;
    name: string;
    price: number;
}

export const addOns: AddOn[] = [
    {
        id: "1",
        name: "2er-Set Foodschalen",
        price: 40
    },
    {
        id: "2",
        name: "4er-Set Foodschalen",
        price: 70
    }
]

export const findAddOnById = (id: string) => addOns.find(variant => variant.id === id)