import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#07090b',
      color: '#fff',
      fontFamily: 'monospace',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '16px', color: '#38bdf8' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '24px', color: '#94a3b8' }}>
        Neural Vector Not Found // Horizon Displaced
      </p>
      <Link href="/" style={{
        padding: '12px 24px',
        borderRadius: '999px',
        background: '#fff',
        color: '#000',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Return to Horizon
      </Link>
    </div>
  );
}
