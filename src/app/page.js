"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      // CAPA INTERFICIAL: Patrón de cuadrícula técnica (Ingeniería/Suministros)
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(240, 80, 35, 0.04) 0%, transparent 45%),
        radial-gradient(circle at 90% 80%, rgba(24, 37, 44, 0.06) 0%, transparent 50%),
        linear-gradient(rgba(24, 37, 44, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(24, 37, 44, 0.02) 1px, transparent 1px)
      `,
      backgroundSize: '100% 100%, 100% 100%, 24px 24px, 24px 24px',
      padding: '24px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* Luces de neón ambientales de fondo */}
      <div style={{
        position: 'absolute', top: '25%', left: '15%', width: '300px', height: '300px',
        background: 'rgba(240, 80, 35, 0.08)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%', width: '350px', height: '350px',
        background: 'rgba(24, 37, 44, 0.05)', borderRadius: '50%', filter: 'blur(90px)', pointerEvents: 'none'
      }} />

      {/* Contenedor Flotante Premium */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '55px 40px',
        borderRadius: '32px',
        boxShadow: '0 25px 50px -12px rgba(24, 37, 44, 0.08), inset 0 2px 4px 0 rgba(255, 255, 255, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '560px',
        textAlign: 'center',
        position: 'relative'
      }}>

        {/* Imagen del Logo con sombra suave */}
        <div style={{ marginBottom: '35px', width: '100%', maxWidth: '380px' }}>
          <Image 
            src="/imagenes/siwa-logo.webp"
            alt="SIWA SUMINISTROS"
            width={380}
            height={190}
            priority
            style={{ objectFit: 'contain', filter: 'drop-shadow(0px 8px 16px rgba(24, 37, 44, 0.04))' }}
          />
        </div>

        {/* Barra decorativa bicolor estilizada */}
        <div style={{ position: 'relative', width: '80px', height: '4px', backgroundColor: '#e2e8f0', marginBottom: '40px', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, height: '100%', width: '70%',
            background: 'linear-gradient(90deg, var(--siwa-orange) 0%, #ff7a59 100%)', borderRadius: '99px'
          }} />
        </div>
        
        {/* Textos Informativos */}
        <div>
          <h1 style={{
            fontSize: 'clamp(36px, 8.5vw, 56px)', color: 'var(--siwa-foreground)', 
            fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: '800', margin: '0', letterSpacing: '-0.5px', lineHeight: '1.15'
          }}>
            ¡Bienvenido!
          </h1>
          
          <p style={{
            fontSize: 'clamp(12px, 3.5vw, 14px)', color: 'var(--siwa-orange)', 
            fontFamily: 'var(--font-montserrat), sans-serif', marginTop: '18px', letterSpacing: '7px', textTransform: 'uppercase', fontWeight: '600'
          }}>
            Sitio en construcción
          </p>
        </div>

      </div>

      <style jsx global>{`
        body { margin: 0; padding: 0; background-color: #f8fafc !important; }
      `}</style>
    </main>
  );
}