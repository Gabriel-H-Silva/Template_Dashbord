import { useState } from 'react';
import { Container, Nav, Button, Offcanvas, Navbar, Collapse } from 'react-bootstrap';
import { MdMenu } from "react-icons/md";
import TopNavBar from './Navbar';
import Logo from '../../img/LogoWeb.jpg';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { GrConfigure } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FaChartColumn, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";

function Sidebar() {
    // Variaveis de configuração
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // configuraçoes do tamanho da barra lateral
    const offcanvasStyle = {
        width: isMobile ? '100vw' : '300px',
        height: isMobile ? '100vh' : 'auto',
    };
  
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='Custom_Container'>
                {/* Botão para abrir e fechar o sidebar menu lateral */}
                <Button onClick={handleShow}><MdMenu /></Button>

                {/* Montar Logo */}
                <Navbar.Brand href="#home" className='Logo_style'>
                    <img alt="" src={Logo} width="45" height="45" className="d-inline-block align-top" />
                </Navbar.Brand>

                {/* Menu header */}
                <TopNavBar />

                {/* Menu Lateral */}
                <Offcanvas style={offcanvasStyle} show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menus</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        {/* Montar os menu Lateral */}
                        <Nav className="d-flex flex-column justify-content-end pe-3">

                            {/* Montar os links */}
                            <Link to="/Home" className="Link_sidebar" onClick={() => setShow(false)}><FaChartColumn className='Icon_sidebar' />Home</Link>
                            <Link to="" className="Link_sidebar" onClick={() => setOpen(!open)} aria-controls="report-collapse-text" aria-expanded={open}>
                                <TbReportAnalytics className='Icon_sidebar' />Relatorio {open ? <FaChevronUp /> : <FaChevronDown />} </Link>
                            <Collapse in={open}>
                                <div id="report-collapse-text">
                                    <Link to="/Reports" className="Link_subSideBar" onClick={() => setShow(false)}>Relatorio 1</Link>
                                    <Link to="/SubRelatorio2" className="Link_subSideBar" onClick={() => setShow(false)}>Relatorio 2</Link>
                                </div>
                            </Collapse>
                            <Link to="/Config" className="Link_sidebar" onClick={() => setShow(false)}><GrConfigure className='Icon_sidebar' />Configurações</Link>
                            <Link to="/Users" className="Link_sidebar" onClick={() => setShow(false)}><FaRegUser className='Icon_sidebar' />Usuários</Link>


                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Sidebar;