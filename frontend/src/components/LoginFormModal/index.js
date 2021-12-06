// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import "./LoginForm.css";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="login-index-container">
      <h1 className="login-text"> Log In</h1>
      <button className="login-button" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal className="modal" onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;