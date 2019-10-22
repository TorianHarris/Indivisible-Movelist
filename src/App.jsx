import React, { Component } from 'react';
import data from './data.json';
//import './images';

import Container from '@material-ui/core/Container';
import CharacterButton from './components/CharacterButton';
import CharacterModal from './components/CharacterModal';
import Footer from './components/Footer'

const style = {
  header: {
    color: 'white',
    margin: 0,
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: data,
      currentCharacter: null,
      setOpen: false,
      testText: 'nothing'
    }

    this.handleModalOpen = (id) => {
      // this.setState({testText: 'someting c:'},
      // () => alert(this.state.testText))
      //alert(id);
      this.setState({ setOpen: true, currentCharacter: this.state.data[id] })
    }

    this.handleModalClose = () => {
      this.setState({ setOpen: false })
    }
  }

  render() {
    return (
      <>
        <Container>
          <h1 style={style.header}>Indivisible Move List</h1>
          <CharacterModal setOpen={this.state.setOpen} handleClose={this.handleModalClose} />
          {data.map((d, index) => {
            return <CharacterButton img={require(`./images/${d.name}.png`)} data={d} id={index} key={index} openModal={this.handleModalOpen} />
          })}
        </Container>
        <Footer />
      </>
    );
  }
}
