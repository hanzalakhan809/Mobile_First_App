import React, { useState } from 'react'
import { Card, Modal, Form, Input, Row, Col, Select } from 'antd';

import './MainContainer.css'
import {

    IdcardFilled,
    MailFilled,
    EnvironmentFilled,
    MobileFilled,
    PlusCircleFilled,
    EditOutlined
} from '@ant-design/icons';

export default function PatientDetail() {

    const defaultPatientDetails = { patientName: 'JamesBond', gender: 'Female', bloodGroup: 'AB+', patientAge: '55', patientId: 'PAA008', patientEmail: 'Patient@gmail.com', patientMobile: '8090788453', patientAddress: '10/223 Gt Road Mumbai-29302' }

    const [PatientDetails, setPatientDetails] = useState(defaultPatientDetails);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();



    const onFinish = (values) => {
        setIsModalOpen(false)
        console.log(values);
        setPatientDetails(values)
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
            <Card.Grid hoverable={false} style={Styles.profilePhoto} ></Card.Grid>
            <EditOutlined style={Styles.editIcon} onClick={showModal} />
            <Modal title="Edit Patient Detail" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    initialValues={PatientDetails}
                    autoComplete="off"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}>
                    <Form.Item
                        name='patientName'
                        label="Patient Name"
                        rules={[
                            {
                                max: 15,
                                message: 'Name must be less than 15 Characters'
                            }
                        ]}
                    >
                        <Input name='patientName' />
                    </Form.Item>

                    <Row>
                        <Col span={8}
                           >
                            <Form.Item
                                name='gender'
                            >

                                <Select
                                    name='gender'
                                    placeholder='Gender'
                                    style={{
                                        width: 100,
                                    }}
                                    options={[
                                        {
                                            value: 'male',
                                            label: 'Male',
                                        },
                                        {
                                            value: 'female',
                                            label: 'Female',
                                        },
                                        {
                                            value: 'other',
                                            label: 'Other',
                                        },

                                    ]}
                                />

                            </Form.Item>
                        </Col>
                        <Col span={8}>

                            <Form.Item
                                name='bloodGroup'
                                rules={[
                                    {
                                        max: 3,
                                        message: 'Invalid Blood Group'
                                    }
                                ]}>
                                <Input placeholder='Blood Group' name='bloodGroup'  />
                            </Form.Item>
                        </Col>
                        <Col span={8}>

                            <Form.Item
                                name='patientAge'
                                rules={[
                                    {
                                        max: 2,
                                        message: 'Invalid Age'
                                    }
                                ]}>
                                <Input placeholder='Age' name='patientAge'  />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Patient Id"
                        name="patientId"
                        rules={[
                            {
                                max: 7,
                                message: 'Id must be Less than 7 Character'
                            }
                        ]}
                    >
                        <Input name="patientId"  />
                    </Form.Item>
                    <Form.Item
                        label="Patient Email"
                        name="patientEmail"
                        rules={[
                            {
                                type: 'email',
                                message: "Please enter Valid Email",
                            },

                        ]}
                    >
                        <Input name="patientEmail" />
                    </Form.Item>
                    <Form.Item
                        label="Patient Mobile"
                        name="patientMobile"
                        rules={[
                            {
                                message: "Please enter Valid Mobile Number",
                                max: 11,
                                min: 9
                            },

                        ]}
                    >
                        <Input name="patientMobile"  />
                    </Form.Item>
                    <Form.Item
                        name='patientAddress'
                        rules={[

                            {
                                max: 40,
                                message: "Address must be Less than 40 Character",
                            },
                        ]}
                    >
                        <Input name='patientAddress' />

                    </Form.Item>

                </Form>

            </Modal>
            <div style={{ marginTop: '4rem' }}>
                <h2 style={Styles.mainHeading}>{PatientDetails?.patientName}</h2>
                <div style={Styles.patientInfoWrapper}  >
                    <span>{PatientDetails?.gender} | <PlusCircleFilled /> {PatientDetails?.bloodGroup} | {PatientDetails?.patientAge} YRS</span>
                    <div style={Styles.textAlignLeft} ><span ><IdcardFilled /> {PatientDetails?.patientId}</span></div>
                    <div style={Styles.gmailAndNoWrapper}><span style={Styles.textAlignLeft} ><MailFilled /> {PatientDetails?.patientEmail}</span><span style={Styles.textAlign} ><MobileFilled /> {PatientDetails?.patientMobile}</span></div>
                    <div style={Styles.textAlignLeft}><span ><EnvironmentFilled /> {PatientDetails?.patientAddress}</span></div>
                </div>
            </div>
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
    profilePhoto: {
        width: '10rem',
        height: '10rem',
        borderRadius: '0.7rem',
        position: 'absolute',
        justifyContent: 'center',
        top: '8%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
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
        color: 'green'
    },
    editIcon: {
        position: 'absolute',
        fontSize: '1.5rem',
        right: '8%',
        cursor: 'pointer'

    },
    select: { padding: '6px 11px', color: '#D3D3D3', borderWidth: '1px', borderStyle: 'solid', borderColor: '#D3D3D3', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', display: 'inline-block', width: '100%' }

}