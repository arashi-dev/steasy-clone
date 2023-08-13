export type Variant = {
    id: string;
    color: {
        name: string;
        hex: string;
    };
    price: number;
    images: string[]
}

export const variants: Variant[] = [
    {
        id: "1",
        color: {
            name: "Green Pepper",
            hex: "#617864"
        },
        price: 299,
        images: []
    },
    {
        id: "2",
        color: {
            name: "Lava Salt",
            hex: "#4C4A44"
        },
        price: 299,
        images: []
    },
    {
        id: "3",
        color: {
            name: "Purple Ginger",
            hex: "#55334A"
        },
        price: 299,
        images: []
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