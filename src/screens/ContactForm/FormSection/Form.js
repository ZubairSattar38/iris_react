import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const ContactForm = (props) => {
    const styles = {
        form: {
            paddingBottom: '4%'
        },
        submitBtn:{
            background: props.state.buttonColor, width: '100%' 
        }
    }
    return (

        <Row>
            <Col >
                <h1> Tell Us About Your Project </h1>
                Looking forward to hearing from you.
                Let’s arrange a chat about your project.

                Phone
                1-310-299-0870
            </Col>
            <Col>
                <Form>
                    <FormGroup style={styles.form}>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup style={styles.form}>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" placeholder="Password" />
                    </FormGroup>

                    <FormGroup style={styles.form}>
                        <Label for="examplePassword">Subject</Label>
                        <Input type="text" name="Subject" placeholder="Subject" />
                    </FormGroup>

                    <FormGroup style={styles.form}>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Enter Description" />
                    </FormGroup>

                    <FormGroup style={styles.form}>
                        <Input type="file" name="file" id="exampleFile" style={{ background: 'aliceblue' }} />
                    </FormGroup>
                    <Button style={styles.submitBtn} variant="outline-primary">Send</Button>{' '}
                </Form>
            </Col>
        </Row>
    );
}

export default ContactForm;