import Menu from "./Menu";

export default function Footer() {
    return (
        <footer className="h-32 self-stretch flex-grow-0 flex flex-row justify-center items-center bg-purple-700">
          <span className="h-6 flex-grow text-sm font-medium not-italic text-left text-white">© {new Date().getFullYear()}</span>
          <Menu />
        </footer>
    )
}