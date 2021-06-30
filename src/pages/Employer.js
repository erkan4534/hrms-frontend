import React, {useState} from 'react';
import {Col, Form, Button} from "react-bootstrap";
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
        event.preventDefault();
        event.stopPropagation();
        employerAdd(values);
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

            if(res.data.success===true){
                toast.info(res.data.message)
            }else{
                toast.error(res.data.message)
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
                        <Form.Label className='font-weight-bold'>Firm Name</Form.Label>
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
                        <Form.Label className='font-weight-bold'>Web Site</Form.Label>
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
                        <Form.Label className='font-weight-bold'>Password</Form.Label>
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
                        <Form.Label className='font-weight-bold'>Re-Password</Form.Label>
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
                        <Form.Label className='font-weight-bold'>Tel No</Form.Label>
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
                        <Form.Label className='font-weight-bold'>Email Address</Form.Label>
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
                            <TableRow >
                                <TableCell className='font-weight-bold'>Firma Adı</TableCell>
                                <TableCell className='font-weight-bold'>Web Sitesi</TableCell>
                                <TableCell className='font-weight-bold'>Email</TableCell>
                                <TableCell className='font-weight-bold'>Tel No</TableCell>
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
