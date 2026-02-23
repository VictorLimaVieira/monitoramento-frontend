import { useState } from "react";
import axios from "axios";  
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const resposta = await axios.post('http://localhost:3000/auth/login', {
                email: email,
                senha: senha
            });
            console.log('Sucesso! O backend respondeu:', resposta.data);
            alert('Login efetuado com sucesso!');

            navigate('/dashboard');

        } catch (erro) {
            console.error('Deu erro ao logar:', erro);
            alert('Erro ao fazer login. Verifique se o backend está rodando');
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh', 
            width: '100%', 
            backgroundColor: '#f4f7f6', 
            fontFamily: 'sans-serif' 
        }}>
            <div style={{ 
                backgroundColor: '#ffffff', 
                padding: '40px 30px', 
                borderRadius: '16px', 
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)', 
                width: '100%', 
                maxWidth: '450px', 
                textAlign: 'center' 
            }}>
                
                <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', margin: '0 0 10px 0' }}>Monitoramento 💊</h2>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '30px' }}>Digite seus dados para acessar seus remédios.</p>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        style={{ padding: '15px', fontSize: '1.2rem', borderRadius: '8px', border: '2px solid #bdc3c7', outline: 'none' }} 
                    />

                    <input 
                        type="password"
                        placeholder="Sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        style={{ padding: '15px', fontSize: '1.2rem', borderRadius: '8px', border: '2px solid #bdc3c7', outline: 'none' }}
                    />

                    <button
                        type="submit"
                        style={{
                            padding: '15px',
                            fontSize: '1.5rem',
                            backgroundColor: '#3498db',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: '0.3s'
                        }}
                    >
                        Acessar
                    </button>
                </form>

                <div style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>
                        Ainda não tem uma conta? <br/>
                        {/* Como deve ficar: */}
                    <Link to="/cadastro" style={{ color: '#2ecc71', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.2rem' }}>
                        Cadastre-se aqui
                    </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}