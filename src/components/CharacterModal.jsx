import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

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
    justifyContent: "center",
    width: '100%'
  },
  paper: {
    minWidth: '70%',
    border: '2px solid #000',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  header: {
    textAlign: 'center',
    backgroundColor: "#97a4af",
    color: 'white',
    margin: 0,
    marginLeft: -15,
    marginRight: -15,
    padding: 10,
  },
  button: {
    color: 'white'
  }
};

function createData(title, desc) {
  return { title, desc };
}

export default function CharacterModal({ data, setOpen, handleArrow, handleClose }) {
  const rows = [
    createData('Neutral Atk', data.neutralAtk ? data.neutralAtk : "NeutralAtk coming soon™"),
    createData('Up Atk', data.upAtk ? data.upAtk : "Up Atk coming soon™"),
    createData('Down Atk', data.downAtk ? data.downAtk : "Down Atk coming soon™"),
    data.special1 ? createData('Special 1', data.special1) : null,
    data.special2 ? createData('Special 2', data.special2) : null,
    data.special3 ? createData('Special 3', data.special3) : null,
    data.special4 ? createData('Special 4', data.special4) :null,
    data.special5 ? createData('Special 5', data.special5) : null,
    data.special6 ? createData('Special 6', data.special6) : null,
    data.special7 ? createData('Special 7', data.special7) : null,
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
            <IconButton aria-label="back" onClick={() => { handleArrow('left') }}>
              <BackIcon style={style.button} />
            </IconButton>
            <Paper style={style.paper}>
              <h2 style={style.header}>{data.name ? data.name : "no name"}</h2>
              <p>Role: {data.role ? data.role : 'N/A'}</p>
              <p>Gimmick: {data.gimmick ? data.gimmick.title : 'N/A'}</p>
              {data.gimmick ? <p>{data.gimmick.desc}</p> : null}
              <Paper style={{ overflowX: 'auto' }}>
                <Table>
                  <TableBody>
                    {rows.map((row) => {
                      if (row)
                        return (
                          <TableRow>
                            <TableCell component="th" scope="row">
                              {row.title}
                            </TableCell>
                            <TableCell>
                              {row.desc}
                            </TableCell>
                          </TableRow>
                        )
                      return null;
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Paper>
            <IconButton aria-label="forward" onClick={() => { handleArrow('right') }}>
              <ForwardIcon style={style.button} />
            </IconButton>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}