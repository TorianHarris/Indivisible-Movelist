import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'

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

    // width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    //boxShadow: theme.shadows[5],
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15

  },
};

function createData(title, desc) {
  return { title, desc };
}

export default function CharacterModal({ data, setOpen, handleClose }) {
  const rows = [
    createData('Neutral Atk', data.neutralAtk ? data.neutralAtk : "NeutralAtk coming soon tm"),
    createData('Up Atk', data.upAtk ? data.upAtk : "Up Atk coming soon tm"),
    createData('Down Atk', data.downAtk ? data.downAtk : "Down Atk coming soon tm"),
  ]
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
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.8)"
          }
        }}
      >
        <Fade in={setOpen}>
          <div style={style.container}>
            <IconButton aria-label="back">
              <BackIcon style={{ color: 'white' }} />
            </IconButton>
            <div style={style.paper}>
              <h2 id="simple-modal-title">{data.name ? data.name : "no name"}</h2>
              <p>Role: {data.role ? data.role : 'N/A'}</p>
              <p>Gimmick: {data.gimmick ? data.gimmick : 'N/A'}</p>
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell>
                        {row.desc}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <IconButton aria-label="back">
              <ForwardIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}