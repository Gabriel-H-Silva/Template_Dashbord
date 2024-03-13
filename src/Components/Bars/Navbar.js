import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import api from '../../Services/api';
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";

async function logout() {
    try{
      await api.get('/api/auth/v1/revoke')

      localStorage.clear();

    }
    catch (error) {
      console.error('Erro ao acessar o endpoint protegido:', error);
    }
}

function Sidebar() {

  const userName = localStorage.getItem('Name');
  

  return (
              
    <Navbar expand="lg" className="bg-body-tertiary">

      {/* Component do menu superior */}
      <Navbar.Collapse className="justify-content-end">
        
        <Navbar.Text>
          Logado: {userName}
        </Navbar.Text>

        <Link to="/"><Button  variant="dark" className='btn_exit' onClick={logout}><ImExit />Sair</Button></Link>
                                    
      </Navbar.Collapse>
                  
    </Navbar>
  );
}

export default Sidebar;
