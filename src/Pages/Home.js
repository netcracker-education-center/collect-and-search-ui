import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Form } from 'antd';

//Pictures
import jiraLogo from '../assets/jira.png';
import ftpLogo from '../assets/ftp.png';

//CSS
import '../css/Form.css';
import AddSearch from '../Components/ForWorkpage/AddSearch';

function Home(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    return (

        <Container fluid style={{ textAlign: 'center' }}>


            <div>
                <div className='h1'>Collect and Search</div>
                <br />
                <br />
            </div>

            <Row className='align-items-center mb-5'>
                <Col sm={12} lg={6} >
                    <p>
                        Search information from your Jira issues. Register in our project, and you can add Jira as a search source. Then you can at any time search info from your all issues.
                    </p>

                    <p>
                        While creating an request, you can use any filters for find out more accurate information.
                    </p>

                    <p>
                        If you know jira very well, you can use JQL for find usless issues and analyse it.
                    </p>

                    <br />
                    <Button block type='primary' ghost onClick={() => setIsModalVisible(true)}>
                        Try to add new request
                    </Button>

                </Col>
                <Col >
                    <img src={jiraLogo}
                        className='img-fluid img-thumbnail shadow mx-auto d-block'
                        alt='Jira logo'
                        xs='auto'
                    />
                </Col>
            </Row>

            <Row className='align-items-center mb-2'>
                <Col sm={12} lg={6}>
                    <img src={ftpLogo}
                        className='img-fluid img-thumbnail shadow mx-auto d-block '
                        alt='FTP logo'
                        xs='auto'
                    />
                </Col>
                <Col>
                    <p>
                        Add as source your FTP server, and we can use it to find any documents like *.txt *.doc *.pdf.
                    </p>
                    <p> Use date or extensions filters for more accurate searching. </p>
                    <br />
                    <Button block type='primary' ghost onClick={() => setIsModalVisible(true)}>
                        Try to add new request
                    </Button>

                </Col>
            </Row>

            <AddSearch
                {...props}
                form={form}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </Container>
    );
}

export default Home;