import React from 'react'
import { Card } from 'antd';
import '../component/MainContainer.css'
import {

    EditOutlined
} from '@ant-design/icons';

export default function PatientRecord() {

    return (
        <Card.Grid style={Styles.gridStyle} hoverable={false}  >
            <EditOutlined style={Styles.editIcon} />

            <h2 style={Styles.mainHeading}>Patient Record</h2>
            <Card style={Styles.screenShotsWrapper} >
                <Card.Grid hoverable={false} style={Styles.screenShotsContainer} ></Card.Grid>
                <Card.Grid hoverable={false} style={Styles.screenShotsContainer} ></Card.Grid>
                <Card.Grid hoverable={false} style={Styles.screenShotsContainer} ></Card.Grid>
            </Card>
        </Card.Grid>
    )
}

const Styles = {
    gridStyle: {
        width: '100%',
        height: '20rem',
        textAlign: 'center',
        fontSize: '1rem',
        position: 'relative'
    },
    screenShotsContainer: {
        width: '7rem',
        height: '7rem',
        borderRadius: '0.5rem',
        justifyContent: 'center',
        margin: '0.4rem'

    },
    patientInfoWrapper: {
        maxWidth: '500px',
        margin: 'auto'
    },
    textAlignRight: {
        textAlign: 'right'

    },
    textAlignLeft: {
        textAlign: 'left'
    },
    gmailAndNoWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    mainHeading: {
        color: 'green',
        textAlign: 'left'
    },
    editIcon: {
        position: 'absolute',
        fontSize: '1.5rem',
        right: '8%',
        cursor: 'pointer'

    },
    screenShotsWrapper: {
        magin: '1rem',
        border: 'none'
    },
   
}