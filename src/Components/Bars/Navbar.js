import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Sidebar() {

  const userName = localStorage.getItem('Name');
  

  return (
              
    <Navbar expand="lg" className="bg-body-tertiary">

      {/* Component do menu superior */}
      <Navbar.Collapse className="justify-content-end">
        
        <Navbar.Text>
          Logado: {userName}
        </Navbar.Text>

        <Link to="/"><Button  variant="dark" className='btn_exit'><ImExit />Sair</Button></Link>
                                    
      </Navbar.Collapse>
                  
    </Navbar>
  );
}

export default Sidebar;
