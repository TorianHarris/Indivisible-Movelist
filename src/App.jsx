import React, { Component } from 'react';
import data from './data.json';

import Container from '@material-ui/core/Container';
import CharacterButton from './components/CharacterButton';
import CharacterModal from './components/CharacterModal';
import Footer from './components/Footer'

const style = {
  header: {
    color: 'white',
    margin: 0,
    padding: 20,
    textAlign: 'center'
  },
  characterContainer: {
    paddingBottom: 40, 
    textAlign: 'center'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: data,
      currentCharacter: {},
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
          <CharacterModal data={this.state.currentCharacter} setOpen={this.state.setOpen} handleClose={this.handleModalClose} />
          <div style={style.characterContainer}>
          {data.map((d, index) => {
            return <CharacterButton img={require(`./images/${d.name}.png`)} data={d} id={index} key={index} openModal={this.handleModalOpen} />
          })}
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}
