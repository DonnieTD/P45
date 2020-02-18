import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Navbar } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [deploy, setDeploy] = useState("")
  const [outputText, setOutputText] = useState(['No Rovers Deployed']);
  function SubmitionHandler(e) {
    e.preventDefault();

    let dataArr = deploy.replace(/ /g, '').split(';').filter(n => n);

    if (dataArr.length % 2 == 0) {
      let AjaxData = {
        plane: {
          "x": x,
          "y": y
        },
        rovers: []
      };

      for (let i = 0; i < dataArr.length - 1; i += 2) {
        let arrWithoutNewLines = dataArr[i].replace(/[\r\n]+/gm, "");

        let rover = {
          "x": Number(arrWithoutNewLines[0]),
          "y": Number(arrWithoutNewLines[1]),
          "d": arrWithoutNewLines[2],
          "moves": dataArr[i + 1].replace(/[\r\n]+/gm, "")
        };

        AjaxData.rovers.push(rover);
      };

         axios({ method: 'post', url: 'http://localhost:3003/Rover', data: AjaxData })
        .then(function (response) {
          if (response.data.length >= 1) {
            let output = [];
            response.data.forEach((x, i) => {
              output.push("Rover " + (i + 1) + " Postition : {x :" + JSON.stringify(x.x) + ", y: " + JSON.stringify(x.y) + ", d: " + JSON.stringify(x.d) + " } ");
            })
            setOutputText(output);
          }
        })
        .catch(function (error) {
          setOutputText([error.response.data]);
        });
    } else {
      setOutputText(['Invalid Input Format Please Check Example']);
    }
  }

  return (
    <div className="App">
      <Navbar className="navBar">
        <Navbar.Brand href="#home">Rover</Navbar.Brand>
      </Navbar>
      <Row>
        <Col xs={12} md={12}>
          <h2>Output</h2>
          <Form className="formOne">
            {outputText.map((x,i) => { return <p key={i}style={{ marginBottom: '0px' }}>{x}</p> })}
          </Form>
          <Form className="formTwo" onSubmit={SubmitionHandler}>
            <h2 style={{ marginTop: '2.5vh' }}>Input</h2>
            <Form.Group controlId="exampleForm.ControlInput1" style={{ marginBottom: '1vh' }}>
              <Row>
                <Col md={6}>
                  <Form.Label>Plane x:</Form.Label>
                  <Form.Control onChange={e => setX(e.target.value)} type="number" placeholder="Eg: 5" />
                </Col>
                <Col md={6}>
                  <Form.Label>Plane y:</Form.Label>
                  <Form.Control onChange={e => setY(e.target.value)} type="number" placeholder="Eg: 5" />
                </Col>
                <Col style={{ marginTop: '5vh' }} md={12}>
                  <Form.Label>Deploy Instructions: (Please split input lines with semi-colons)</Form.Label>
                  <Form.Control onChange={e => setDeploy(e.target.value)} as="textarea" rows="3" />
                </Col>
                <Button type="submit" style={{ margin: '5vh auto', background: "white", color: 'black' }}>
                  Submit
                </Button>
              </Row>
            </Form.Group>
          </Form>

          <p style={{ color: 'white' }}>
            Example<br />
            1 2 N; LMLM;<br />
            or<br />
            1 2 N;
            LMLMLMLMM;
            3 3 E;
            MMRMMRMRRM;
              </p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
