import React from 'react';

const style = {
  width: 131,
  height: 150,
  //border: '3px solid black',
  //borderRadius: '16px',
  margin: 7,
}

export default function CharacterButton(props) {
  const { name } = props.data;
  return (
    <input style={style} type="image" alt={name} src={props.img} onClick={() => props.openModal(props.id)} />

    // <div style={style}>
    //   <p>{name}</p>
    //   <img src={props.img} alt=""/>
    //   <button onClick={() => props.openModal(props.id)}>click me</button>
    // </div>
  )
}