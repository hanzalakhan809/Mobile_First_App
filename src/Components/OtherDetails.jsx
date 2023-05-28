import React, { useState } from 'react'
import { Card, Modal, Form, Input, Row, Col } from 'antd';
import './MainContainer.css'
import {
    RightOutlined,
    EditOutlined
} from '@ant-design/icons';


export default function OtherDetails() {
    const defaultOtherDetails = { patientAlignment1: 'Diabetics', patientAlignment2: 'thyroid', doctorName: 'Doctor X', doctorContact: '8090677574'}
    const [otherPatientDetails, setOtherPatientDetails] = useState(defaultOtherDetails);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [note, setNote] = useState('');
    const [form] = Form.useForm();


    const onFinish = (values) => {
        setIsModalOpen(false)
        console.log(values);
        setOtherPatientDetails(values)

    }

    const showModal = () => {
        form.resetFields();
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
            <Modal title="Edit Other Detail" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    initialValues={otherPatientDetails}
                    autoComplete="off"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}>
                    <Row>
                        <Col span={12}>

                            <Form.Item
                            label='Patient'
                                name='patientAlignment1'
                                rules={[
                                    {
                                        max: 15,
                                        message: 'Max 15 Character'
                                    }
                                ]}>
                                <Input placeholder='Aliment 1' name='patientAlignment1'  />
                            </Form.Item>
                        </Col>
                        <Col span={11}>

                            <Form.Item
                             label='Patient'
                                name='patientAlignment2'
                                rules={[
                                    {
                                        max: 15,
                                        message: 'Max 15 Character'
                                    }
                                ]}>
                                <Input placeholder='Aliment 2' name='patientAlignment2'  />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name='doctorName'
                        label="Doctor Name"
                        rules={[
                            {
                                max: 15,
                                message: 'Name must be less than 15 Characters'
                            }
                        ]}
                    >
                        <Input name='doctorName'  />
                    </Form.Item>
                    <Form.Item
                        label="Doctor Contact"
                        name="doctorContact"
                        rules={[
                            {
                                message: "Please enter Valid Mobile Number",
                                max: 11,
                                min: 9
                            },

                        ]}
                    >
                        <Input name="doctorContact"  />
                    </Form.Item>

                </Form>

            </Modal>
            <h2 style={Styles.mainHeading}>Other Details</h2>
            <div style={Styles.patientInfoWrapper}  >
                <span style={Styles.textAlignLeft}></span>
                <div style={Styles.textAlignLeft}><span ><b>Patient Aliment:-</b></span></div>
                <div style={Styles.textAlignLeft} ><span ><RightOutlined />{otherPatientDetails?.patientAlignment1}</span></div>
                <div style={Styles.textAlignLeft} ><span ><RightOutlined />{otherPatientDetails?.patientAlignment2}</span></div>
                <div style={{ ...Styles.textAlignLeft, ...Styles.extraMargin }} ><span >Consulting Doctor: <b>{otherPatientDetails?.doctorName}</b></span></div>
                <div style={Styles.textAlignLeft} ><span >Doctor's Contact #: <b>{otherPatientDetails?.doctorContact}</b></span></div>


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