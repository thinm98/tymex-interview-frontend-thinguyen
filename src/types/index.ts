export interface IAuthor {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    avatar: string;
    onlineStatus: 'online' | 'offline' | 'idle' | 'busy';
}

export interface IProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    isFavorite: boolean;
    createdAt: number;
    theme: string;
    tier: string;
    imageId: number;
    author: IAuthor;
}

export interface IFilterParams {
    _order?: "asc" | "desc" | undefined;
    _sort?: "createdAt" | "price" | undefined;
    _limit?: number;
    _page?: number;
    category?: string;
    q?: string;
    title_like?: string;
    priceRange?: [number, number];
    tier?: string;
    theme?: string;
    time?: string;
}