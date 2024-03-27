export default function Footer() {
    return(
    <footer className="flex items-center justify-center h-14 px-4 border-t gap-4 md:px-6">
        <div>
            <p>&copy; {new Date().getFullYear()} Recipe Weather Blog</p>
        </div>
    </footer>
    )
}