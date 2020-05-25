import React, { Component } from 'react';
import { Container, Content, Accordion } from "native-base";
const dataArray = [
  { title: "RS Kariadi" , content: "Dirawat : 24 , Isolasi Mandiri : 11" },
  { title: "RS Telogorejo", content: "Dirawat : 3 , Isolasi Mandiri : 1" },
  { title: "Rs TuguRejo", content:  "Isolasi Mandiri : 11" },
  { title: "Rs William Both", content: "Dirawat : 24 " },
  { title: "Rs WongsoNegoro", content: "Dirawat : 24 " }
];

export default class BagianAtas extends Component {
 

  render() {
    return (
      <Container style={{height:50}}>
      
        <Content padder>
          <Accordion dataArray={dataArray} icon="arrow-down" expandedIcon="arrow-up"/>
        </Content>
      </Container>
    );
  }
}

