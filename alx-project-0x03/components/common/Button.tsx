
// // interface ButtonProps {
// //   buttonLabel: string
// //   buttonSize?: string
// //   buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
// //   action?: () => void
// // }

// import { ButtonProps } from "@/interface";

// const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {

//   const backgroundColorClass = buttonBackgroundColor ? {
//     red: 'bg-red-500',
//     blue: 'bg-blue-500',
//     orange: 'bg-orange-500',
//     green: 'bg-green-500',
//   }[buttonBackgroundColor] : 'bg-slate-500'


//   return (
//     <button onClick={action} className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}>
//       {buttonLabel}
//     </button>
//   )
// }

// export default Button;

import { ButtonProps } from "@/interface";

export default function Button({
  action,
  buttonLabel,
  buttonBackgroundColor,
}: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`px-4 py-2 rounded-lg text-white bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600`}
    >
      {buttonLabel}
    </button>
  );
}
