import Link from 'next/link';

export default function RelatedRecipes () {
    return(
    <>
        <h2 className="font-bold text-xl">Related Posts</h2>
        <ul className="grid gap-4">
        <li>
            <Link className="font-medium underline" href="#">
            5 Tips for Perfectly Roasted Vegetables
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Whether you're a seasoned home cook or just starting out in the kitchen, roasting vegetables is a simple
            and delicious way to prepare a wide variety of produce.
            </p>
        </li>
        <li>
            <Link className="font-medium underline" href="#">
            The Art of Making Homemade Pasta
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            There's something truly special about homemade pasta. The process of mixing the dough, rolling it out,
            and shaping it into various pasta shapes is a labor of love.
            </p>
        </li>
        </ul>
    </>
    )
}