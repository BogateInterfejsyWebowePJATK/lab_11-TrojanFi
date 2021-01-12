import React from 'react';
import PageLevel from './PageLevel';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './../App.css';

// $('.delete').on('click', function(){
//   $(this).parent().remove();
// });

 function Easy() {
    return (
        <div>       
      <PageLevel name="the list of random numbers between 0-10 :"/>
      <ListGroup Vertical>
  <ListGroup.Item>
    {Math.floor(Math.random()*11)}
    <div className="List-Item" class="d-flex justify-content-between">
    <Button variant="danger" >Delete</Button>
    <Button variant="success">Binary</Button>
    <Button variant="warning">8</Button>
    <Button variant="info">16</Button>
    <Button variant="primary">All</Button>
    </div>
    </ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  <ListGroup.Item>{Math.floor(Math.random()*11)}</ListGroup.Item>
  </ListGroup>
      </div>

      
    )
}
export default Easy;