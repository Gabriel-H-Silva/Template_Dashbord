import { Container, Row, Col, Modal, Button, Form, ModalBody } from "react-bootstrap";
import api from "../../Services/api";

function ConfirmModal(props) {

  async function confirm() {

    const apiUrl = props.selectedPerson.apiUrl;
    const id = props.selectedPerson.id;
    try {
      await api.delete(apiUrl + id);
    }
    catch (error) {
      alert('Falha para enviar a api');
    }
    props.onHide();
    window.location.reload();
  }

  return (
 
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" >

      <Modal.Header className="modal_header" closeButton>
        <Modal.Title className="Title_custom_footer" id="contained-modal-title-vcenter">
          {props.selectedPerson ? props.selectedPerson.title : null}
        </Modal.Title>
      </Modal.Header>

      <ModalBody style={{ fontWeight: 'bold' }}>

        {props.selectedPerson ? props.selectedPerson.message : null}

      </ModalBody>
      <Modal.Footer>

        <Button className="btn_modal_salvar" onClick={confirm}>Confirmar</Button>
        <Button className="btn_modal_close" onClick={props.onHide}>Cancelar</Button>

      </Modal.Footer>
    </Modal>


  );
}

export default ConfirmModal;