import { useState } from 'react';
import axios from 'axios'; // 🚨 Trouxemos o axios direto
import { Link, useNavigate } from 'react-router-dom'; // 🚨 Adicionamos o useNavigate

export function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // 🚨 Instanciando o nosso "motorista"
    const navigate = useNavigate();

    const handleCadastro = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // 🚨 Endereço completo apontando para o NestJS
            const resposta = await axios.post('https://api-nest-estudo.onrender.com/usuarios', {
                nome: nome,
                email: email,
                senha: senha
            });
            console.log('Sucesso! Conta criada:', resposta.data);
            alert('Cadastro efetuado com sucesso!');
            
            // 🚨 Deu certo? Joga o usuário para fazer o login!
            navigate('/login');

        } catch (erro) {
            console.error('Deu erro ao cadastrar:', erro);
            alert('Erro ao criar conta. Verifique os dados ou se o backend está rodando');
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
                
                <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', margin: '0 0 10px 0' }}>Criar Conta 📝</h2>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '30px' }}>Preencha os dados para começar a monitorar seus remédios.</p>

                <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    <input
                        type="text"
                        placeholder="Qual o seu nome completo?"
                        value={nome}
                        onChange={ (e) => setNome(e.target.value)}
                        style={{ padding: '15px', fontSize: '1.2rem', borderRadius: '8px', border: '2px solid #bdc3c7', outline: 'none' }} 
                        required
                    />

                    <input
                        type="email"
                        placeholder="Digite seu melhor e-mail"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        style={{ padding: '15px', fontSize: '1.2rem', borderRadius: '8px', border: '2px solid #bdc3c7', outline: 'none' }} 
                        required
                    />

                    <input 
                        type="password"
                        placeholder="Crie uma senha segura"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        style={{ padding: '15px', fontSize: '1.2rem', borderRadius: '8px', border: '2px solid #bdc3c7', outline: 'none' }}
                        required
                    />

                    <button
                        type="submit"
                        style={{
                            padding: '15px',
                            fontSize: '1.5rem',
                            backgroundColor: '#2ecc71',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: '0.3s'
                        }}
                    >
                        Cadastrar
                    </button>
                </form>

                <div style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>
                        Já tem uma conta? <br/>
                    <Link to="/login" style={{ color: '#3498db', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.2rem' }}>
                        Faça login aqui
                    </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}