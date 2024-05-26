import { Row } from 'react-bootstrap'
import './Communicate.css'
import { Card } from 'react-bootstrap';

export function Communicate({content}){

    return (
        <Row className='communicate-row'>
            <Card body className='communicate'>{content}</Card> 
        </Row >
    );

}