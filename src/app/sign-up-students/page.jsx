'use client'
import '@/styles/form.css';
import Container from "@/components/container";
import Header from "@/components/header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
  });

const SignUpStudentsPage = () => {
    return (
        <Container>
            <Header />
            <main className="main-container flex w-full justify-center pb-12">
                <section className="form-section">
                <form className="form-wrapper">
                <h1>Cadastro de usuário</h1>

                <div className="form-group">
                    <label>Nome:</label>
                    <input type="text" required />
                </div>

                <div className="form-group">
                    <label>E-mail institucional:</label>
                    <input type="email" required />
                </div>

                <div className="form-group">
                    <label>Senha:</label>
                    <input type="password" required />
                </div>

                <div className="form-group">
                    <label>Confirmação de senha:</label>
                    <input type="password" required />
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <label htmlFor="curso" style={{ minWidth: '70px' }}>Curso:</label>
    <select id="curso" name="curso" required>
      <option value="">Selecione o curso</option>
      <option value="gestao">Gestão Empresarial</option>
      <option value="desenvolvimento">Desenvolvimento de Software Multiplataforma</option>
    </select>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <label htmlFor="semestre" style={{ minWidth: '70px' }}>Semestre:</label>
    <select id="semestre" name="semestre" required>
      <option value="">Selecione o semestre</option>
      {[1, 2, 3, 4, 5, 6].map(n => (
        <option key={n} value={n}>{n}º semestre</option>
      ))}
    </select>
  </div>
</div>

                <div className="checkbox-wrapper">
                    <input type="checkbox" required />
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
    );
};

export default SignUpStudentsPage;