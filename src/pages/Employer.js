import React, {useState,useEffect} from 'react';
import {Col, Form, Button, Toast, Alert} from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";
import {toast} from "react-toastify";
import EmployerService from "../services/EmployerService";
import Title from "../layouts/Title";
import {Table} from "reactstrap";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";


function Employer() {

    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        firmNameId: '', webSiteId: '', telNoId: '', passwordId: '',rePasswordId: '',emailId:''
    });

    const [employerList, setEmployerList] = useState([]);


    const onChangeHandler =(event)=>{
        setValues({...values, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        let result= employerAdd(values);

        setValidated(true);
    };

    function employerAdd(values){

        const params = {
            firmName: values.firmNameId,
            person:{
                email: values.emailId,
                password: values.passwordId,
                telNo: values.telNoId
            },
            webSite: values.webSiteId
        };

        let employerService = new EmployerService()
        employerService.employerAdd(params).then(res => {
            if (res.status == 'success') {
                alert(res.status)
            } else {
                alert('Something went wrong while creating account')
            }
        })

    }


    function getEmployerList(){
        let employerService = new EmployerService();
        employerService.getAllEmployers().then(result=>{
             setEmployerList(result.data.data)
        });
    }

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

                <Button type="submit" className='mr-2'>Kaydet</Button>
                <Button onClick={getEmployerList}>Ara</Button>
            </Form>

            {
                 (employerList.length>0) && <div className='mt-4' >
                    <Title>İş Verenler</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Firma Adı</TableCell>
                                <TableCell>Web Sitesi</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Tel No</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {employerList.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.firmName}</TableCell>
                                    <TableCell>{row.webSite}</TableCell>
                                    <TableCell>{row.person.email}</TableCell>
                                    <TableCell>{row.person.telNo}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            }

        </div>
    );
}

export default Employer;
