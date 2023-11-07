import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function ReactModal() {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  return (
    <div className="modal">
      <h1>Modal</h1>
      <button onClick={() => setModelIsOpen(true)}>Open Model</button>
      <Modal
        isOpen={modelIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModelIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
            color: "gold",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          },
        }}
      >
        <h1>Modal title</h1>
        <p>Modal body</p>
        <div className="modal-btn">
          <button
            style={{
              padding: "5px 20px",
              fontSize: "23px",
              color: "red",
              backgroundColor: "white",
              border: "1px solid red",
              outline: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => setModelIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
