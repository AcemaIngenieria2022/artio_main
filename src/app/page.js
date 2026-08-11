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
      backgroundColor: '#120d0a', // Fondo café ultra oscuro sobrio
      padding: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Resplandor cálido central estilo madera/dorado */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(180, 115, 60, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      {/* Trama sutil de fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        pointerEvents: 'none'
      }} />

      {/* TARJETA PRINCIPAL */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '520px',
        backgroundColor: 'rgba(24, 18, 14, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '56px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid rgba(210, 150, 90, 0.2)',
        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.65)'
      }}>

        {/* Detalle dorado superior impecable */}
        <div style={{
          position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px',
          background: 'linear-gradient(90deg, transparent, #c48b4e, transparent)',
          borderRadius: '99px'
        }} />

        {/* Contenedor del Logo con tarjeta blanca limpia para que el logo resalte */}
        <div style={{
          marginBottom: '32px',
          width: '100%',
          maxWidth: '340px',
          backgroundColor: '#ffffff',
          padding: '24px 20px',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image 
            src="/imagenes/artio-logo.webp"
            alt="Artio Ebanistería"
            width={300}
            height={150}
            priority
            unoptimized
            style={{ 
              objectFit: 'contain',
              width: '100%',
              height: 'auto'
            }}
          />
        </div>

        {/* Separador elegante */}
        <div style={{
          width: '40px',
          height: '2px',
          borderRadius: '99px',
          background: '#c48b4e',
          marginBottom: '28px',
          opacity: 0.8
        }} />

        {/* Textos */}
        <h1 style={{
          fontSize: 'clamp(28px, 6vw, 38px)', 
          color: '#ffffff', 
          fontWeight: '700', 
          margin: '0', 
          letterSpacing: '-0.5px'
        }}>
          ¡Bienvenido!
        </h1>
        
        <p style={{
          fontSize: '12px', 
          color: '#c48b4e', 
          marginTop: '12px', 
          letterSpacing: '4px', 
          textTransform: 'uppercase', 
          fontWeight: '600'
        }}>
          Sitio en construcción
        </p>

      </div>
    </main>
  );
}