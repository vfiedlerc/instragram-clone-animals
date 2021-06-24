import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
     
      <p>AQUI EU COLOCO O LINK DE PAGAMENTO

      </p>

      <p> O PRICING VAI REDIREDIONAR PRA CA</p>

      <p>AQUI VAI TER BASICAMENTE UMA EXPLICACAO DO QUE E O SERVICO PRESTADO E VOU CHAMAR UM BOTAO AQUI QUE VAI PODER FAZER O CHECKOUT......DPS PRECISO ESTILIZAR A PAGINA INICIAL COM BOOTSTRAP E ALGUNS DETALHES DO FOOTER E DO HEADER.........TROCAR AS IMAGENS DO SITE E INTEGRAR UMA API COM FIREBASE PRA PODER CONSUMIR A API</p>
    </header>

    
  );
};

export default UserHeader;
