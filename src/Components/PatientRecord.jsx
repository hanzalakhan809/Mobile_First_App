import React, { useContext, useState } from 'react'
import { Card, Modal, Upload } from 'antd';
import './MainContainer.css'
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { MyContext } from '../Context/myContext';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function PatientRecord() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

const {fileList,setFileList}=useContext(MyContext);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  
  return (
    <Card.Grid style={Styles.gridStyle} hoverable={false}  >
      {/* <EditOutlined style={Styles.editIcon} /> */}

      <h2 style={Styles.mainHeading}>Patient Record</h2>
      <Card style={Styles.screenShotsWrapper} >
        <Upload
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 4 ? null : uploadButton}
 
        </Upload>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>
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
    border: '1px solid #d3d3d3',
    margin: '2rem 0',
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