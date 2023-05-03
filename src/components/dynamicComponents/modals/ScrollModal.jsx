import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

const ScrollModal = (props) => {
  return (
    <React.Fragment>
      <Modal
        scrollable={true}
        show={props.show}
        onHide={props.handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.data.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.data}
          {props.data.content !== undefined ? props.data.content : ""}
        </Modal.Body>
        <Modal.Footer>
          {props.data.footer !== undefined ? props.data.footer : ""}
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

ScrollModal.propTypes = {
  scroll: PropTypes.bool,
  data: PropTypes.object,
};

export default ScrollModal;
