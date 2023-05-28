import React, { useState } from 'react'
import { Card, Modal, Form, Input, Row, Col } from 'antd';

import '../component/MainContainer.css'
import {

    IdcardFilled,
    MailFilled,
    EnvironmentFilled,
    MobileFilled,
    PlusCircleFilled,
    EditOutlined
} from '@ant-design/icons';

export default function PatientDetail() {
    
    const defaultPatientDetails = { patientName: 'JamesBond', gender: 'Female', bloodGroup: 'AB+', patientAge: '55', patientId: 'PAA008', patientEmail: ' Patient@gmail.com', patientMobile: '8090788453', patientAddress: '10/223 Gt Road Mumbai-29302' }
    
    const [PatientDetails, setPatientDetails] = useState(defaultPatientDetails);
    const [editedPatientDetails, setEditedPatientDetails] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    

    const onFinish = (values) => {
        console.log('hi');
        setIsModalOpen(false)
        console.log(values);
    }


    const showModal = () => {
        // form.resetFields();
      setEditedPatientDetails(PatientDetails)
        setIsModalOpen(true);
        // console.log(editedPatientDetails);
    };
    const handleOk = () => {
        form.submit();
        setPatientDetails(editedPatientDetails)
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onChangeEditDetails = (e) => {

        setEditedPatientDetails({ ...editedPatientDetails, [e.target.name]: e.target.value });
        // console.log({ [e.target.name]: e.target.value });


    };


    return (
        <Card.Grid style={Styles.gridStyle} hoverable={false}  >
            <Card.Grid hoverable={false} style={Styles.profilePhoto} ></Card.Grid>
            <EditOutlined style={Styles.editIcon} onClick={showModal} />
            <Modal title="Edit Patient Detail" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    autoComplete="off"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}>
                    <Form.Item
                    name={'hi'}
                        label="Patient Name"
                        rules={[
                            {
                                max: 15,
                                message: 'Name must be less than 15 Characters'
                            }
                        ]}
                    >
                        <Input name='patientName' onChange={onChangeEditDetails} value={editedPatientDetails.patientName} />
                    </Form.Item>

                    <Row>
                        <Col span={8}
                            style={{ margin: 'auto' }} >
                            <Form.Item
                                name='gender'
                            >

                                <select name="gender" style={Styles.select} onChange={(e) => onChangeEditDetails(e)} >
                                    <option style={{ color: 'grey' }} disabled value={'gender'}>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>

                            <Form.Item
                              
                                rules={[
                                    {
                                        max: 3,
                                        message: 'Invalid Blood Group'
                                    }
                                ]}>
                                <Input placeholder='Blood Group' name='bloodGroup' onChange={(e) => onChangeEditDetails(e)} value={editedPatientDetails.bloodGroup} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>

                            <Form.Item
                                rules={[
                                    {
                                        max: 2,
                                        message: 'Invalid Age'
                                    }
                                ]}>
                                <Input placeholder='Age' name='patientAge' onChange={(e) => onChangeEditDetails(e)} value={editedPatientDetails.patientAge} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Patient Id"
                        rules={[
                            {
                                max: 7,
                                message: 'Id must be Less than 7 Character'
                            }
                        ]}
                    >
                        <Input name="patientId" onChange={(e) => onChangeEditDetails(e)} value={editedPatientDetails.patientId} />
                    </Form.Item>
                    <Form.Item
                        label="Patient Email"
                        rules={[
                            {
                                type: 'email',
                                message: "Please enter Valid Email",
                            },

                        ]}
                    >
                        <Input name="patientEmail" onChange={(e) => onChangeEditDetails(e)}value={editedPatientDetails.patientEmail} />
                    </Form.Item>
                    <Form.Item
                        label="Patient Mobile"
                        rules={[
                            {
                                message: "Please enter Valid Mobile Number",
                                max: 11,
                                min: 9
                            },

                        ]}
                    >
                        <Input name="patientMobile" onChange={(e) => onChangeEditDetails(e)} value={editedPatientDetails.patientMobile} />
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
                        <Input name='patientAddress' onChange={(e) => onChangeEditDetails(e)} value={editedPatientDetails.patientAddress} />

                    </Form.Item>

                </Form>

            </Modal>
            <div style={{ marginTop: '4rem' }}>
                <h2 style={Styles.mainHeading}>{PatientDetails?.patientName}</h2>
                <div style={Styles.patientInfoWrapper}  >
                    <span>{PatientDetails?.gender } | <PlusCircleFilled /> {PatientDetails?.bloodGroup} | {PatientDetails?.patientAge} YRS</span>
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