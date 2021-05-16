import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FiSearch } from 'react-icons/fi';
import { BsFillBellFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { GiHealthNormal } from 'react-icons/gi';

const NavBar = () => {
    return (
        <div>
            <Navbar sticky="top">
            
                <Nav.Link href="#home" className="navlink"><GiHealthNormal/> For Doc</Nav.Link>
                <Nav.Link href="#home" className="navlink1"><FiSearch/> Search and Book</Nav.Link>
                <Nav.Link href="#home" className="navlink2"><GrLocation/> Nearby</Nav.Link>
                <Nav.Link href="#home" className="navlink3"><BsFillBellFill/> Notifications</Nav.Link>
            </Navbar>  
        </div>
    );
}

export default NavBar;








