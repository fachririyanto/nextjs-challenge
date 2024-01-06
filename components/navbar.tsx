import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="h-20">
            <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-gray-200 bg-black text-white">
                <div className="flex h-full px-4 items-center">
                    <Link href="/" className="inline-flex py-3 font-bold uppercase">
                        Store App
                    </Link>
                </div>
            </nav>
        </header>
    )
}