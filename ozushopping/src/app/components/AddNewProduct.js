
import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
export default function AddNewProduct({onAdd}){
    const [modal, setModal] = useState(false);
    const [newProduct, setNewProduct]= useState({
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "image": "",
        "thumbnail": "",
        "like":0,
        "dislike":0
      })

      function handleChange(event){
        setNewProduct({...newProduct, [event.target.name]:event.target.value})
        console.log({newProduct})
      }
      
      const handleSave=()=>{
        onAdd(newProduct);
        setNewProduct({
            "id": "",
            "name": "",
            "description": "",
            "price": "",
            "image": "",
            "thumbnail": "",
            "like":0,
            "dislike":0
          })
        toggle();
      }

    const toggle = () => setModal(!modal);

    return (
        <div>
          <Button color="primary" block onClick={toggle}>
            Add New Product
          </Button>
          <Modal isOpen={modal}>
            <ModalHeader toggle={toggle}>Add New Product</ModalHeader>
            <ModalBody>
              <input type="text" name="id" placeholder="Enter product id" onChange={handleChange}></input>
              <br/>
              <input type="text" name="name" placeholder="Enter product name" onChange={handleChange}></input>
              <br/>
              <input type="text" name="description" placeholder="Enter product description" onChange={handleChange} size={40}></input>
              <br/>
              <input type="text" name="price" placeholder="Enter product price" onChange={handleChange}></input>
              <br/>
              <input type="text" name="thumbnail" placeholder="Enter thumbnail image URL" size={40} onChange={handleChange}></input>
              <br/>
              <input type="text" name="image" placeholder="Enter image URL" onChange={handleChange} size={40}></input>
              <br/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={handleSave}>
                Save
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }