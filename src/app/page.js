"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fcfbf9',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Luz cálida ambiental de fondo */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(180, 130, 90, 0.15) 0%, transparent 65%)',
        filter: 'blur(90px)', pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute', bottom: '-10%', right: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(120, 80, 50, 0.12) 0%, transparent 65%)',
        filter: 'blur(90px)', pointerEvents: 'none'
      }} />

      {/* Trama geométrica minimalista */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(44, 30, 20, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(44, 30, 20, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      {/* TARJETA PRINCIPAL */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '540px',
        background: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '28px',
        padding: '52px 40px 45px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.9)',
        boxShadow: `
          0 20px 50px -15px rgba(44, 30, 20, 0.08),
          0 0 30px -5px rgba(180, 130, 90, 0.15)
        `
      }}>

        {/* Borde superior decorativo */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', right: '10%', height: '3px',
          background: 'linear-gradient(90deg, transparent, #8B5A2B, #2C1E14, transparent)',
          borderRadius: '99px'
        }} />

        {/* Detalle lateral */}
        <div style={{
          position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px',
          background: 'linear-gradient(180deg, #8B5A2B 0%, #2C1E14 100%)',
          borderRadius: '0 4px 4px 0'
        }} />

        {/* Logo Artio Ebanistería */}
        <div style={{
          marginBottom: '28px',
          width: '100%',
          maxWidth: '320px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Image 
            src="/imagenes/artio-logo.webp"
            alt="Artio Ebanistería"
            width={320}
            height={160}
            priority
            unoptimized
            style={{ 
              objectFit: 'contain',
              filter: 'drop-shadow(0px 6px 12px rgba(44, 30, 20, 0.06))'
            }}
          />
        </div>

        {/* Separador */}
        <div style={{
          width: '60px',
          height: '3px',
          borderRadius: '99px',
          background: 'linear-gradient(90deg, #8B5A2B, #2C1E14)',
          marginBottom: '32px'
        }} />

        {/* Bloque Tipográfico */}
        <h1 style={{
          fontSize: 'clamp(32px, 7vw, 46px)', 
          color: '#2C1E14', 
          fontWeight: '800', 
          margin: '0', 
          letterSpacing: '-0.5px',
          lineHeight: '1.1'
        }}>
          ¡Bienvenido!
        </h1>
        
        <p style={{
          fontSize: 'clamp(12px, 3vw, 13px)', 
          color: '#8B5A2B', 
          marginTop: '12px', 
          letterSpacing: '5px', 
          textTransform: 'uppercase', 
          fontWeight: '700'
        }}>
          Sitio en construcción
        </p>

      </div>
    </main>
  );
}