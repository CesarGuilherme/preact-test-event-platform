import { Logo } from "./logo";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center py-5 bg-smoky-100/50 shadow-lg shadow-cyan-900 border-b border-cyan-700">
      <Logo />
    </header>
  );
}
