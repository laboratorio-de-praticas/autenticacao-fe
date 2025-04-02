'use client'

import Container from "../container";
import Header from "../header";
import Main from "../main";
import { Roboto } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import Button from "../button";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const EmailVerification = () => {
    const [email, setEmail] = useState("")

    return (
        <Container>
            <Header />
            <Main>
                <div className="flex w-full">
                    <div className="flex pt-10 w-2/5 justify-center">
                        <div className="flex w-full max-w-[420px] flex-col gap-y-5">
                            <h1 className={`font-bold text-[20px] ${roboto.className}`}>CONFIRMAÇÃO DE E-MAIL</h1>
                            <h3 className={`font-normal text-[14px] ${roboto.className}`}>
                                Confirme seu e-mail abaixo:
                            </h3>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                type="text"
                                placeholder="seuemail@fatec.sp.gov.br"
                                className="w-full text-[14px] font-light border-solid border-[#000000] border-b-2 focus:outline-none pb-1.5"
                            />

                            <div className="flex w-full justify-center">
                                <Button
                                    cor = "azul escuro"
                                    texto = "Enviar"
                                    hasIcon = {false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5">
                        <Image
                            src="/imagem.svg"
                            alt="Imagem"
                            width={0}
                            height={0}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Main>
        </Container>
    );
};

export default EmailVerification;