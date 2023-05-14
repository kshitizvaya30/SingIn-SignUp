import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Context } from "../../context/AppContext";

function PopUpEdit(props) {
  const { addNewRow, user, updateNewRow, handleDelete } = useContext(Context);
  const [newRow, setNewRow] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    availability: "",
    quantity: "",
    userId: user.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    if (props.action === "Confirm Delete") {
      handleDelete(newRow.id,newRow.userId);
      props.updateRow(true);
      return;
    }


    // Empty Check
    if (newRow.name === "") {
      alert("Name cannot be Empty");
      return;
    }

    if (newRow.price === "") {
      alert("Price cannot be Empty");
      return;
    }

    if (newRow.category === "") {
      alert("Category cannot be Empty");
      return;
    }

    if (newRow.quantity === "") {
      alert("Quantity cannot be Empty");
      return;
    }

    if (newRow.availability === "" || newRow.availability === undefined) {
      alert("Avaialbility cannot be Empty");
      return;
    }

    // Add Row
    if (props.action === "Add Row") {
      // console.log("add Row", newRow);
      addNewRow(newRow, props.show);
      props.updateTable(true);
    }
    if (props.action === "Update Row") {
      // console.log("Update Row Section", props);
      updateNewRow(newRow, props.updateModal);
      props.updateRow(true);
    }

  };

  useEffect(() => {
    if (props.params != null) {
      // console.log(props.params);
      setNewRow((prevNewRow) => ({
        ...prevNewRow,
        id:props.params.row.id,
        name: props.params.row.item_name,
        price: props.params.row.selling_price,
        category: props.params.row.item_category,
        quantity: props.params.row.item_quantity,
        availability: props.params.row.item_availability,
      }));
    }
  }, [props.params]);

  const handleCredentials = (key, value) => {
    setNewRow((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
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
            <Form.Control
              type="text"
              placeholder={newRow.name}
              onChange={(e) => {
                handleCredentials("name", e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder={newRow.price}
              onChange={(e) => {
                handleCredentials("price", e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder={newRow.quantity}
              onChange={(e) => {
                handleCredentials("quantity", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder={newRow.category}
              onChange={(e) => {
                handleCredentials("category", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="availability">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              type="date"
              placeholder={newRow.availability}
              onChange={(e) => {
                handleCredentials("availability", e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            {props.action}
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
