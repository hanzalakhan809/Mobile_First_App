import React from 'react'
import { Card, Button } from 'antd';
import '../component/MainContainer.css'
import {
    MenuOutlined,
    HomeFilled,
    MessageFilled,
    UserOutlined
} from '@ant-design/icons';


import PatientDetail from './PatientDetail';
import OtherDetails from './OtherDetails';
import PatientAttendantDetails from './PatientAttendantDetails';
import PatientRecord from './PatientRecord';

export default function MainContainer() {


    return (
        <>
            <div className="mainContainer">
                <header>
                    <nav>
                        <span id='nav-menu-btn' ><MenuOutlined /></span>
                        <span id='nav-back-btn'><b>Back</b></span>
                    </nav>
                </header>
                <div className='content-container'>
                    <Card className='card-wrapper'>
                        <PatientDetail />
                        <OtherDetails />
                        <PatientAttendantDetails />
                        <PatientRecord />
                        {/* <Card.Grid style={gridStyle}>Content</Card.Grid> */}
                        <div className="bnt-container">
                            <Button className='submit-btn' size='large' >Submit</Button>
                        </div>
                    </Card>
                </div>
                <hr />
                <footer>
                    <div className='footer-icon-wrapper' >
                        <HomeFilled />
                        <span>Home</span>
                    </div>
                    <div className='footer-icon-wrapper'>
                        <UserOutlined />
                        <span>My Profile</span>
                    </div>
                    <div className='footer-icon-wrapper'>
                        <MessageFilled />
                        <span>Feedback</span>
                    </div>
                </footer>
            </div>
        </>
    )
}
