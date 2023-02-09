export type ClothesProps = {
    clothes: [
        {
            id: number;
            title: string;
            price: number;
            description: string;
            category: string;
            image: string;
            rating: { rate: number; count: number };
        }
    ];
    mainLink?: string;
};

export type CartProps = {
    clicked: boolean;
    state: () => void;
};
