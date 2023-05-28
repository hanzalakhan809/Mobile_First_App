import React, { useState } from 'react'
import { Card, Modal, Form, Input, Row, Col } from 'antd';
import './MainContainer.css'
import {
    EditOutlined,
    MailFilled,
    MobileFilled,
    EnvironmentFilled
} from '@ant-design/icons';

export default function PatientAttendantDetails() {

    // defaultPatientAttendatDetails is the pre Stored data getting from the APi
    const defaultPatientAttendatDetails = { PrimaryAttendantName: 'Robert Einstien', relation: 'Son', attendantEmail: 'Attendant@gmail.com', attendantMobile: '8090788567', attendantAddress: '25/990 Sivdi Mumbai-24242' }


    const [patientAttendantDetails, setPatientAttendantDetails] = useState(defaultPatientAttendatDetails);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();


    const onFinish = (values) => {
        setIsModalOpen(false)
        console.log(values);
        setPatientAttendantDetails(values)
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        form.submit();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Card.Grid style={Styles.gridStyle} hoverable={false}  >
            <EditOutlined style={Styles.editIcon} onClick={showModal} />
            <h2 style={Styles.mainHeading}>Patient Attendant Details</h2>
            <div style={Styles.patientInfoWrapper}  >
                <span style={Styles.textAlignLeft}></span>
                <div style={Styles.textAlignLeft}><span ><b>Primary Attendant:-</b></span></div>
                <div style={Styles.textAlignLeft} ><span >Name: {patientAttendantDetails?.PrimaryAttendantName}</span></div>
                <div style={Styles.textAlignLeft} ><span >Relation with Patient: {patientAttendantDetails?.relation}</span></div>
                <div style={Styles.gmailAndNoWrapper}><span style={Styles.textAlignLeft} ><MailFilled /> {patientAttendantDetails?.attendantEmail}</span><span style={Styles.textAlign} ><MobileFilled /> {patientAttendantDetails?.attendantMobile}</span></div>
                <div style={Styles.textAlignLeft}><span ><EnvironmentFilled /> {patientAttendantDetails?.attendantAddress}</span></div>
            </div>
            <Modal title="Edit Primary Attendant Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    initialValues={patientAttendantDetails}
                    autoComplete="off"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}>
                    <h4>Primary Attendant</h4>
                    <Row>
                        <Col span={12}>

                            <Form.Item
                                label='Name'
                                name='PrimaryAttendantName'
                                rules={[
                                    {
                                        max: 15,
                                        message: 'Max 15 Character'
                                    }
                                ]}>
                                <Input placeholder='Name' name='PrimaryAttendantName' />
                            </Form.Item>
                        </Col>
                        <Col span={11}>

                            <Form.Item
                                label='Relation'
                                name='relation'
                                rules={[
                                    {
                                        max: 10,
                                        message: 'Max 10 Character'
                                    }
                                ]}>
                                <Input placeholder='Relation' name='relation' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Attendant Email"
                        name="attendantEmail"
                        rules={[
                            {
                                type: 'email',
                                message: "Please enter Valid Email",
                            },

                        ]}
                    >
                        <Input name="attendantEmail" />
                    </Form.Item>
                    <Form.Item
                        label="Attendant Mobile"
                        name="attendantMobile"
                        rules={[
                            {
                                message: "Please enter Valid Mobile Number",
                                max: 11,
                                min: 9
                            },

                        ]}
                    >
                        <Input name="attendantMobile" />
                    </Form.Item>
                    <Form.Item
                        name='attendantAddress'
                        label="Attendant Address"
                        rules={[

                            {
                                max: 40,
                                message: "Address must be Less than 40 Character",
                            },
                        ]}
                    >
                        <Input name='attendantAddress' />

                    </Form.Item>
                </Form>

            </Modal>
        </Card.Grid>

    )
}

const Styles = {
    gridStyle: {
        width: '100%',
        height: '20rem',
        textAlign: 'center',
        fontSize: '1rem'
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
    extraMargin: {
        marginTop: '1rem'
    }
}