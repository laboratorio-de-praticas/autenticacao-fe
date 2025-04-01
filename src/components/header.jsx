import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const Header = () => {
    return (
        <header className={`flex flex-col ${nunito.variable}`}>
            <div className="flex items-center justify-between border-b-1 border-[#DADADA]">
                <div className="h-[98px] w-[409px] bg-[#000000] rounded-tr-full rounded-br-full">
                    <Image
                        alt="Logo do Governo"
                        src="/governo-sp-logo.svg"
                        width={215}
                        height={98}
                        className="ml-3.5"
                    />
                </div>

                <div className="flex items-center gap-x-3.5 pr-9">
                    <div className="flex items-center gap-x-[5px]">
                        <Image
                            alt="Logo Flickr"
                            src="/flickr.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Linkedin"
                            src="/linkedin.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo TikTok"
                            src="/tiktok.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Youtube"
                            src="/youtube.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Twitter"
                            src="/twitter.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Instagram"
                            src="/istagram.svg"
                            width={30}
                            height={30}
                        />

                        <Image
                            alt="Logo Facebook"
                            src="/facebook.svg"
                            width={30}
                            height={30}
                        />                    
                    </div>
                    <span className={`text-base font-normal ${nunito.className}`}>
                        /governosp
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-x-10">
                <Image
                    alt="Logo da Fatec"
                    src="/fatec-registro-logo.svg"
                    width={200}
                    height={130}
                    className=""
                />

                <Image
                    alt="Logo do Centro Paula Souza"
                    src="/centro-paula-souza-logo.svg"
                    width={122}
                    height={130}
                    className="" 
                />
            </div>
        </header>
    )
};

export default Header;