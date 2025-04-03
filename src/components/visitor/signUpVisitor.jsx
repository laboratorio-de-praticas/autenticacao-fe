'use client'

import Container from "../container";
import Header from "../header";
import Main from "../main";
import { Roboto } from "next/font/google";
import { useState } from "react";
import Button from "../button";
import { CheckIcon, MapPinIcon } from "lucide-react"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const SignUpVisitor = () => {
    const [phone, setPhone] = useState("");
    const [isOn, setIsOn] = useState(false);

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "").replace(/^55/, "");
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
          return `+55 (${match[1]}) ${match[2]}-${match[3]}`;
        }
    };

    const toggleSwitch = () => {
        setIsOn((prev) => !prev);
    };

    return (
        <Container>
            <Header />
            <Main hasSpacing={true}>
                <div className="flex max-w-[460px] flex-col gap-y-5">
                    <h1 className={`font-bold text-[20px] ${roboto.className}`}>Quase lá! Vamos verificar seu número e garantir sua localização.</h1>

                    <p className={`font-light text-[14px] ${roboto.className}`}>
                        Digite seu número abaixo. Enviaremos um código de verificação.
                    </p>

                    <input
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                        type="text"
                        placeholder="+55 (13) 99999-9999"
                        className="w-full text-[14px] font-light border-solid border-[#000000] border-b-2 focus:outline-none pb-1.5"
                        maxLength={19}
                    />

                    <div className="flex gap-x-1.5 items-center">
                        <MapPinIcon
                            size={50}
                        />

                        <p className={`font-light text-[14px] ${roboto.className}`}>
                            Para completar, precisamos verificar sua localização. Isso é para garantir que você esteja onde precisa estar.
                        </p>
                    </div>

                    <div className="flex gap-x-2.5 items-center">
                    <button
                        onClick={toggleSwitch}
                        className={`w-16 h-8 flex items-center p-1 rounded-full transition-colors duration-300 ${isOn ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"}`}
                        >
                        <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ${isOn ? "translate-x-0.2" : "translate-x-0"}`}></div>
                    </button>

                        <p className={`font-medium text-[14px] ${roboto.className}`}>
                            Permitir acesso à localização
                        </p>
                    </div>

                    <div className="flex w-full justify-center gap-x-4">
                        <Button
                            cor = "azul"
                            texto = "Enviar código"
                            icon = {CheckIcon}
                            onClick = {
                                () => {
                                    console.log("Confirmar");
                                }
                            }
                        />
                    </div>
                </div>
            </Main>
        </Container>
    );
};

export default SignUpVisitor;