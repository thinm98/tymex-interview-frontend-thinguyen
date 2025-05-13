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