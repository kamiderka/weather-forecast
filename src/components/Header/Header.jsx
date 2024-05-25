import { Container, ToggleButton } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch.jsx';
import './Header.css'


export function Header(){
    
    return (
        <Navbar bg="light" className="bg-body-tertiary">
            <Container fluid >
                <Navbar.Brand>
                    <img className='logo' src="sunny.png" width="50" height="50" />
                    <div className='navbar-header' >
                        <h1 className=''>Weather & Energy Forecast </h1>
                        <span>by OpenMeteo</span>
                    </div>
                </Navbar.Brand>
                <div className='navbar-right'>
                    <ToggleSwitch/>
                </div>
            </Container>
        </Navbar>
    )
}