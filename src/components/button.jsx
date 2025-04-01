import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const Button = ({
    cor,
    texto,
    hasIcon = true,
    icon: Icon,
    onClick = () => {}
}) => {
    return (
        <button 
            onClick={onClick} 
            className={`flex items-center bg-[${cor}] py-2 px-3 rounded-full gap-x-2`}
        >
            {hasIcon && (
                <Icon color="white" size={24} />
            )}
            <span className={`text-white font-bold text-lg ${roboto.className}`}>
                {texto}
            </span>
        </button>
    );
};

export default Button;