import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import moment from "moment";

function PopUpEdit(props) {

    const handleSubmit = () => {
        console.log(user);
    }
    const[user, setUser] = useState({
        name: props.params.row.name,
        price: props.params.row.price,
        category: props.params.row.category,
        availability: moment(props.params.row.availability).format("YYYY-MM-DD"),
    });

    const handleCredentials = (key, value) => {
        setUser((prevUser) => ({
          ...prevUser,
          [key]: value,
        }));
        console.log(user);
      };
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Current Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={user.name} onChange={(e) => {handleCredentials('row', e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder={user.price} onChange={(e) => {handleCredentials('price', e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="Category">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder={user.category} onChange={(e) => {handleCredentials('category', e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="availability">
            <Form.Label>Availability</Form.Label>
            <Form.Control type="date" placeholder={user.availability} onChange={(e) => {handleCredentials('availability', e.target.value)}}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUpEdit;
