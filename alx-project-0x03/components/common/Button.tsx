


import { ButtonProps } from "@/interface";

const colorMap: Record<string, string> = {
  red: "bg-red-500 hover:bg-red-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-green-500 hover:bg-green-600",
  orange: "bg-orange-500 hover:bg-orange-600",
};

export default function Button({ action, buttonLabel, buttonBackgroundColor }: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`px-4 py-2 rounded-md text-white ${colorMap[buttonBackgroundColor]}`}
    >
      {buttonLabel}
    </button>
  );
}
