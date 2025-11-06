import Link from "next/link";

export default function Menu() {
    return (
        <>
        <Link href='#'>
            <span className="w-16 h-6 flex-grow-0 text-sm font-medium not-italic text-left text-white">Condiciones</span>
        </Link>
        <Link href='#'>
            <span className="w-16 h-6 flex-grow-0 text-sm font-medium not-italic text-left text-white">Privacidad</span>
        </Link>
        <Link href='#'>
            <span className="w-16 h-6 flex-grow-0 text-sm font-medium not-italic text-left text-white">Coockies</span>
        </Link>
        <Link href='#'>
            <span className="w-16 h-6 flex-grow-0 text-sm font-medium not-italic text-left text-white">Sitemap</span>
        </Link>
        </>
    );
}