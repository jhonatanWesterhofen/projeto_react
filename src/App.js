import './App.css';
import { motion } from 'framer-motion';
import Evento from './components/Evento';
import Form from './components/Forms';

function App() {
    const name = 'Jhonatan';
    const newname = name.toUpperCase();
    const nome = "Maria"

    function sum(a, b) {
        if (a > 5) {
            a = a + 15;
        }
        return a + b;
    }

    const url = 'https://img.freepik.com/vetores-gratis/malha-colorida-de-vetor-abstrato-em-fundo-escuro-cartao-de-estilo-futurista-fundo-elegante-para-apresentacoes-de-negocios-esfera-de-ponto-corrompida-estetica-do-caos_1217-4607.jpg?t=st=1742429363~exp=1742432963~hmac=16d2691fbf95142dc880f56e88dea043e51c9e5c1c16e55cd2c707ab42338adf&w=740';

    return (
        <div className="App">
            <h1> Olá mundo!</h1>

            <h1> Testando eventos </h1>
            <Evento numero="1" />
            <Evento numero="2" />
            <Form />

            { }
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{
                    backgroundColor: '#61dafb',
                    padding: '20px',
                    borderRadius: '10px',
                    cursor: 'pointer'
                }}
            >
                🚀 Olá, Testando animações
            </motion.div>
        </div>
    );
}

export default App;