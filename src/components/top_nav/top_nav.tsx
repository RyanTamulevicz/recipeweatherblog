import Link from "next/link"
import { UserIcon, ChefHat } from "lucide-react"
import { ModeToggle } from "@/components/top_nav/theme_toggle"

export default function Topnav() {
  return (
    <header className="flex items-center h-14 px-4 border-b gap-4 md:px-6">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
        <ChefHat className="w-6 h-6" />
        <span className="sr-only">Recipe Weather Blog</span>
      </Link>
      <div className="ml-auto flex items-center gap-4">
      <Link className="inline-flex items-center gap-2 text-sm font-medium" href="/login">
        <UserIcon className="w-4 h-4" />
        <span>Log in</span>
      </Link>
      <ModeToggle />
      </div>
    </header>
  )
}