import React from 'react';
import Button from '@material-ui/core/Button'

const style = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    //height: 25,
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
    fontAlign: 'center',
    padding: 5,
    minWidth: 0,
    textTransform: 'lowercase'
  }

}

export default function Footer() {
  return (
    <div style={style.footer}>
      <Button style={style.text} href="https://ko-fi.com/shauncodes" target="_blank">Donate</Button>
      |
      <Button style={style.text}>FAQ</Button>
    </div>
  )
}