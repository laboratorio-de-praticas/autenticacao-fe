const RegisterForm = () => {
    return (
        <div className="min-h-auto pb-20 flex justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-lg font-bold mb-6">CADASTRO DE USUÁRIO</h2>
    
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium">Nome:</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 outline-none focus:border-blue-500"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium">E-mail institucional:</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-400 outline-none focus:border-blue-500"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium">Senha:</label>
                <input
                  type="password"
                  className="w-full border-b border-gray-400 outline-none focus:border-blue-500"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium">Confirmação de senha:</label>
                <input
                  type="password"
                  className="w-full border-b border-gray-400 outline-none focus:border-blue-500"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium">Curso:</label>
                <select className="w-full mt-1 border border-gray-300 rounded px-2 py-1">
                  <option>Selecione o curso</option>
                  <option>ADS</option>
                  <option>Eventos</option>
                </select>
              </div>
    
              <div>
                <label className="block text-sm font-medium">Semestre:</label>
                <select className="w-full mt-1 border border-gray-300 rounded px-2 py-1">
                  <option>Selecione o semestre</option>
                  <option>1º Semestre</option>
                  <option>2º Semestre</option>
                </select>
              </div>
    
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" />
                <p>
                  Li e estou de acordo com o{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Termo de Uso
                  </a>{' '}
                  e{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Política de Privacidade
                  </a>.
                </p>
              </div>
    
              <button
                type="submit"
                className="bg-cyan-900 text-white max-w-52 font-semibold py-2 px-7 rounded-full hover:bg-cyan-800 transition mx-auto"
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      );
}

export default RegisterForm;