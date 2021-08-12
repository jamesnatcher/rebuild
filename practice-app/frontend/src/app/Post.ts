export interface Post {
    post_id?: number;
    title: string;
    body: string;
    image_url: string;
    likes: number;
    dislikes: number;
    commentscount: number;
    comments?: number[];
}