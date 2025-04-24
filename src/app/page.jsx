'use client'
import '@/styles/form.css';
import Container from "@/components/container";
import Header from "@/components/header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
  });

const SignUpAdmPage = () => {
    return (
        <>
        <Header />
        <Container>
            
            <main className="main-container flex w-full justify-center pb-12">
                <section className="form-section">
                    <form className="form-wrapper">
                    <h1>Cadastro de usuário</h1>

                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label>E-mail institucional:</label>
                        <input type="email" />
                    </div>

                    <div className="form-group">
                        <label>Senha:</label>
                        <input type="password" />
                    </div>

                    <div className="form-group">
                        <label>Confirmação de senha:</label>
                        <input type="password" />
                    </div>

                    <div className="checkbox-wrapper">
                        <input type="checkbox" />
                        <span>
                        Li e estou de acordo com o <a href="#">Termo de Uso e Política de Privacidade</a>.
                        </span>
                    </div>

                    <button className="button" type="submit">Continuar</button>
                    </form>
                </section>

                <section className="image-section">
                    <img src="/Body.png" alt="Imagem" />
                </section>
                </main>

        </Container>
        </>
    );
};

export default SignUpAdmPage;
