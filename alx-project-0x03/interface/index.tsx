// import { ReactNode } from "react";
// export interface PageRouteProps {
//   pageRoute: string;
// }
// export interface ButtonProps {
//   action: () => void;
//   buttonLabel: string;
//   buttonBackgroundColor: string;
// }

// export interface LayoutProps {
//   children: ReactNode;
// }


// // interface/index.ts
// import { ReactNode } from "react";

// // Interface for page routing
// export interface PageRouteProps {
//   pageRoute: string;
// }

// // Interface for the Button component
// export interface ButtonProps {
//   action: () => void;
//   buttonLabel: string;
//   buttonBackgroundColor: "red" | "blue" | "green" | "orange";
// }

// // Interface for Layout component
// export interface LayoutProps {
//   children: ReactNode;
// }


// interface/index.ts
import { ReactNode } from "react";

// Interface for page routing
export interface PageRouteProps {
  pageRoute: string;
}

// Interface for the Button component
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: "red" | "blue" | "green" | "orange";
}

// Interface for Layout component
export interface LayoutProps {
  children: ReactNode;
}
