import { Link } from 'react-router-dom';

export function Dashboard() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f4f7f6',
            fontFamily: 'sans-serif',
            padding: '20px'
        }}>
            <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                padding: '20px 30px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <h1 style={{ color: '#2c3e50', margin: 0, fontSize: '2rem' }}>Meus Remédios 💊</h1>

                {/* Botão de Sair que volta para o Login */}
                <Link to="/login" style={{
                    padding: '12px 25px',
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    transition: '0.3s'

                }}>
                    Sair
                    </Link>
            </header>

            {/* Área Central onde vão ficar os cards dos remédios no futuro */}
            <main style={{ 
                marginTop: '40px', 
                textAlign: 'center',
                maxWidth: '800px',
                margin: '40px auto 0 auto'
            }}>
                <h2 style={{ color: '#34495e', fontSize: '2.5rem'}}>Bem-vindo ao Monitorando!</h2>
                <p style={{ fontSize: '1.5rem', color: '#7f8c8d', marginTop: '20px' }}>
                    Em breve, sua lista de horários aparecerá aqui.
                </p>

                {/* Um "esqueleto" de como será o card de um remédio */}
                <div style={{
                    marginTop: '40px',
                    padding: '30px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '2px dashed #bdc3c7',
                    color: '#95a5a6',
                    fontSize: '1.2rem'
                }}>
                    Nenhum medicamento cadastrado ainda.
                </div>

            </main>
        </div>
    );
}