import React, {useState} from 'react';
import  {Col, Form, Button, InputGroup,Alert} from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";
import axios from "axios";

function EmployerAdd() {

    const [validated, setValidated] = useState(false);

    const [values, setValues] = useState({
        firmNameId: '', webSiteId: '', telNoId: '', passwordId: '',rePasswordId: '',emailId:''
    });

    const onChangeHandler =(event)=>{

        setValues({
            ...values,
            [event.target.name]: event.target.value
        });

    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const userObject = {
            firmName: values.firmNameId,
              person:{
                  email: values.emailId,
                  password: values.passwordId,
                  telNo: values.telNoId
              },
             webSite: values.webSiteId
        };



        axios.post('http://localhost:8080/api/employers/add', userObject)
            .then((res) => {
                console.log(res.data)

                    [
                    'primary'
                    ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert with{' '}
                        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                        like.
                    </Alert>
                ));

            }).catch((error) => {
            console.log(error)
        });

        setValidated(true);
    };

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Firm Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="firmNameId"
                            name="firmNameId"
                            onChange={onChangeHandler}
                            placeholder="Firm Name"/>
                        <Feedback type="invalid">Firm name is required!</Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Web Site</Form.Label>
                       <Form.Control
                            required
                            type="text"
                            id="webSiteId"
                            name="webSiteId"
                            onChange={onChangeHandler}
                            placeholder="Web Site"/>
                        <Feedback type="invalid">Web Site is required!</Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="passwordId"
                            name="passwordId"
                            onChange={onChangeHandler}
                            placeholder="password"/>
                        <Feedback type="invalid">Password is required!</Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Re-Password</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="rePasswordId"
                            name="rePasswordId"
                            onChange={onChangeHandler}
                            placeholder="Re-Password"/>
                        <Feedback type="invalid">Re-Password is required!</Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="6" >
                        <Form.Label>Tel No</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            id="telNoId"
                            name="telNoId"
                            onChange={onChangeHandler}
                            placeholder="Tel No"/>
                        <Feedback type="invalid">Tel No is required!</Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            id="emailId"
                            name="emailId"
                            onChange={onChangeHandler}
                            placeholder="Enter email"/>
                        <Feedback type="invalid">Enter properly email address!</Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                </Form.Row>


                <Button type="submit">Save</Button>
            </Form>
        </div>
    );
}


export default EmployerAdd;
