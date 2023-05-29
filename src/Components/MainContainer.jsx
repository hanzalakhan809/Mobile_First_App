import React, { useState, useEffect } from 'react'
import { Card, Button, Popconfirm } from 'antd';
import './MainContainer.css'
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
import { MyContext } from '../Context/myContext';
import { defaulPatientRecord } from '../Constant/constants'

export default function MainContainer() {

    //DEFAULT VAUES || VALUES COMING FROM THE API
    //Lets Assume Default Values is the pre Stored data getting from the API

    const defaultPatientDetails = { patientName: 'JamesBond', gender: 'Male', bloodGroup: 'AB+', patientAge: '55', patientId: 'PAA008', patientEmail: 'Patient@gmail.com', patientMobile: '8090788453', patientAddress: '10/223 Gt Road Mumbai-29302' };
    const defaultOtherDetails = { patientAlignment1: 'Diabetics', patientAlignment2: 'thyroid', doctorName: 'Doctor X', doctorContact: '8090677574' };
    const defaultPatientAttendatDetails = { PrimaryAttendantName: 'Robert Einstien', relation: 'Son', attendantEmail: 'Attendant@gmail.com', attendantMobile: '8090788567', attendantAddress: '25/990 Sivdi Mumbai-24242' }

    //Global States || States stores in Context
    const [PatientDetails, setPatientDetails] = useState(defaultPatientDetails);
    const [otherPatientDetails, setOtherPatientDetails] = useState(defaultOtherDetails);
    const [patientAttendantDetails, setPatientAttendantDetails] = useState(defaultPatientAttendatDetails);
    const [fileList, setFileList] = useState(defaulPatientRecord);


    const [finalDataToSubmit, setFinalDataToSubmit] = useState('');

    const confirm = async () => {
        setFinalDataToSubmit({ PatientDetails, otherPatientDetails, patientAttendantDetails, fileList });
        //HERE THE CALL YOUR API AS PER NEED
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalDataToSubmit)
            }
            // const url ='Your Api on which Data to be sent '
            const response = await fetch(url, config)
            const json = await response.json()
            console.log(json);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <MyContext.Provider value={{ PatientDetails, setPatientDetails, otherPatientDetails, setOtherPatientDetails, patientAttendantDetails, setPatientAttendantDetails, fileList, setFileList }}>
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
                            <div className="bnt-container">
                                <Popconfirm
                                    title="Submit Details"
                                    description="Are you sure to submit details?"
                                    onConfirm={confirm}
                                    // onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button className='submit-btn' size='large' >Submit</Button>
                                </Popconfirm>
                            </div>
                        </Card>
                    </div>
                    <div className="footer-border"></div>
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
        </MyContext.Provider>
    )
}
