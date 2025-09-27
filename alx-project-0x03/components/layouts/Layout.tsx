import { LayoutProps } from "@/interface";

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">Splash App Header</header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4 mt-8 text-center">Splash App Footer</footer>
    </div>
  );
}

