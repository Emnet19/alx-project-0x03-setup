// import { ReactNode } from "react";
// import Footer from "./Footer";
// import Header from "./Header";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;




import { LayoutProps } from "@/interface";

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">Splash App Header</header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
        Splash App Footer
      </footer>
    </div>
  );
}
