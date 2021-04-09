import React, { useState } from 'react';
import Avatar from '../Components/ForProfile/Avatar';
import UserInfo from '../Components/ForProfile/UserInfo';
import Users from '../Components/ForProfile/Users';

import { Col, Container, Row } from 'react-bootstrap';
import AddSourceModal from '../Components/ForProfile/sources/AddSourceModal';
import Sources from '../Components/ForProfile/sources/Sources';

function Profile(props) {

    const [showModal, setShowModal] = useState(false);
    // let show = false;
    const [type, settype] = useState('add');

    const crud = (type)=>{
        settype(type);
        setShowModal(true);
        // show=true;
    }

    return (
        <Container fluid className='mt-sm-2 mt-lg-5'>

            <Row className='mt-sm-5'></Row>

            <Row className='mt-sm-5 mt-lg-5'>
                <Col ms={6} lg={4} className="">
                    <Avatar />
                </Col>

                <Col ms={6} lg={4} className="">
                    <UserInfo />
                </Col>

                <Col lg={4} className="">
                    <Sources {...props} crud={crud}/>
                </Col>
            </Row>

            <Row>
                <Col className="">
                    <Users />
                </Col>
            </Row>

            <AddSourceModal
                type={type}
                show={showModal}
                onHide={() => setShowModal(false)}

            />
        </Container>
    );
}

export default Profile;
