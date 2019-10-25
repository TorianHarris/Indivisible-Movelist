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
      index: 0,
      setOpen: false,
      testText: 'nothing'
    }

    this.handleModalOpen = (id) => {
      // this.setState({testText: 'someting c:'},
      // () => alert(this.state.testText))
      //alert(id);
      this.setState({ setOpen: true, index: id })
    }

    this.handleModalClose = () => {
      this.setState({ setOpen: false })
    }

    this.handleArrowButton = direction => {
      if (direction === 'right' && this.state.index < this.state.data.length-1)
        this.setState({ index: this.state.index + 1 })
      else if (direction === 'left' && this.state.index > 0)
        this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    return (
      <>
        <Container>
          <h1 style={style.header}>Indivisible Move List</h1>
          <CharacterModal data={this.state.data[this.state.index]} setOpen={this.state.setOpen} handleClose={this.handleModalClose} handleArrow={this.handleArrowButton}/>
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
