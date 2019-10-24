import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const style = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    position: 'absolute',
    outline: 'none',
    display: 'flex',
    justifyContent: "center"
  },
  paper: {

    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    //boxShadow: theme.shadows[5],
    padding: 5,

  },
};

export default function CharacterModal({ data, setOpen, handleClose }) {
  //const { name, upAtk } = data;
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={setOpen}
        onClose={handleClose}
        style={style.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={setOpen}>
          <div style={style.container}>
          <button> {"<"} </button>
          <div style={style.paper}>
            <h2 id="simple-modal-title">{data.name ? data.name : "no name"}</h2>
            <p id="simple-modal-description">
              {data.upAtk ? data.upAtk : "UpAtk coming soon tm"}
          </p>
          </div>
          <button> {">"} </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}