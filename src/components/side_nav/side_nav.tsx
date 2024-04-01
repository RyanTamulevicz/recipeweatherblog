import Link from "next/link"
import { HomeIcon, PackageIcon, SettingsIcon, CloudDrizzle, CookingPot } from "lucide-react"

export default function Sidenav() {
  return (
    <nav className="flex flex-col items-center gap-2 w-14 py-4 border-r bg-gray-100 dark:bg-gray-800">
        <Link className="flex w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 justify-center hover:bg-gray-200 dark:hover:bg-gray-700" href="/">
        <CookingPot className="w-6 h-6" />
        <span className="sr-only">Recipes</span>
        </Link>
        <Link className="flex w-full p-2 rounded-lg justify-center hover:bg-gray-200 dark:hover:bg-gray-700" href="#">
        <CloudDrizzle className="w-6 h-6" />
        <span className="sr-only">Weather</span>
        </Link>
        <Link className="flex w-full p-2 rounded-lg justify-center hover:bg-gray-200 dark:hover:bg-gray-700" href="/admin">
        <SettingsIcon className="w-6 h-6" />
        <span className="sr-only">Settings</span>
        </Link>
    </nav>
  )
}