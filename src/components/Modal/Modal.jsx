import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

function Lyrics(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lyrics
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.data[props.currentSongIndex].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.data[props.currentSongIndex].lyrics}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Lyrics;
