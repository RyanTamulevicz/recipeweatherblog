export interface Recipe {
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    time_to_cook: string;
    good_in_weather: string;
    difficulty: string;
    method: string[];
    ingredients: string[];
    blog: string;
}