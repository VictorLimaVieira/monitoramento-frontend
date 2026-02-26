import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Dashboard() {

    const [nome, setNome] = useState('')
    const [dosagem, setDosagem] = useState('')
    const [horario, setHorario] = useState('')

    const handleCadastrarMedicamento = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados salvos:", nome, dosagem, horario);
    };

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
                <form
                    onSubmit={handleCadastrarMedicamento}
                    style={{
                        display: 'flex',
                        msFlexDirection: 'column',
                        gap: '15px',
                        backgroundColor: '#fff',
                        padding: '30px',
                        borderRadius: '16px',
                        marginTop: '30px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0.05)'
                    }}
                    
                >
                    <h3 style={{ margin: '0 0 15px 0', color: '#2c3e50', textAlign: 'left' }}>Cadastrar Novo Medicamento</h3>

                    <input
                        type="text"
                        placeholder='Nome do medicamento (ex: Aspirina)?'
                        value={nome}
                        onChange={ (e) => setNome(e.target.value)}
                        style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
     
                    />

                    <input
                         type="text"
                         placeholder='Dosagem (ex: 500mg)'
                         value={dosagem}
                         onChange={(e) => setDosagem(e.target.value)}
                         style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}

                    />

                    <input
                        type="time"
                        value={horario}
                        onChange={(e) => setHorario(e.target.value)}
                        style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
                     />
                     <button type="submit" style={{
                        padding: '15px',
                        backgroundColor: "#2ecc71",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        marginTop: '10px'
                     }}> 
                        Salvar Medicamento
                     </button>


                </form>

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
                   Nenhum Medicamento Cadastrado ainda.     
                </div>

            </main>
        </div>
    );


}