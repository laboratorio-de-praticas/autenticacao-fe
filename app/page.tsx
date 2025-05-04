'use client'
import { useState } from 'react'
import Header from './components/Header'
import Image from 'next/image'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', overflowX: 'hidden' }}>
      {/* Botão de Toggle - Camada mais alta */}
      <button 
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          left: '10px',
          top: '10px',
          zIndex: 1001,
          backgroundColor: '#B20000',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar - Camada superior */}
      <div style={{
        width: '250px',
        backgroundColor: '#B20000',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: sidebarOpen ? '0' : '-250px',
        bottom: 0,
        zIndex: 1000,
        transition: 'left 0.3s ease',
        boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Menu</h2>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <a href="/dashboard" style={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                padding: '0.75rem',
                borderRadius: '4px',
                backgroundColor: '#990000'
              }}>
                Dashboard
              </a>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <a href="/projetos" style={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                padding: '0.75rem',
                borderRadius: '4px'
              }}>
                Projetos
              </a>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <a href="/representantes" style={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                padding: '0.75rem',
                borderRadius: '4px'
              }}>
                Representantes
              </a>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <a href="/configuracoes" style={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                padding: '0.75rem',
                borderRadius: '4px'
              }}>
                Configurações
              </a>
            </li>
          </ul>

          <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>© 2025 Fatec</p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal - Camada inferior */}
      <div style={{ 
        width: '100%',
        position: 'relative',
        transition: 'filter 0.3s ease',
        filter: sidebarOpen ? 'brightness(0.7)' : 'none'
      }}>
        <Header />
        
        <main style={{ padding: '2rem' }}>
          {/* Seção Vermelha com Navegação */}
          <div style={{ 
            backgroundColor: '#B20000', 
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem', 
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ flexShrink: 0 }}>
              <Image 
                src="/img/banner.png"
                alt="Logo Fatec"
                width={550}
                height={220}
                style={{ height: 'auto' }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>
              <Image 
                src="/img/user.png"
                alt="Usuário"
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
              <span>Nome do Usuário</span>
            </div>
          </div>

          {/* Seção das Imagens Principais */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <a href="/projetos" style={{ textDecoration: 'none' }}>
              <div style={{ 
                width: '350px',
                height: '350px',
                backgroundColor: '#f3f4f6',
                borderRadius: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <Image 
                  src="/img/Projetos.png"
                  alt="Projetos"
                  width={350}
                  height={350}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </a>

            <a href="/representantes" style={{ textDecoration: 'none' }}>
              <div style={{ 
                width: '350px',
                height: '350px',
                backgroundColor: '#f3f4f6',
                borderRadius: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <Image 
                  src="/img/representantes.png"
                  alt="Representantes"
                  width={350}
                  height={350}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </a>
          </div>
        </main>

        <Header />
      </div>
    </div>
  )
}