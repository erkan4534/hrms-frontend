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
        id: '', firmNameId: '', webSiteId: '', telNoId: '', passwordId: '', rePasswordId: '', emailId: ''
    });

    const [employerList, setEmployerList] = useState([]);

    const onChangeHandler = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    const clear = () => {
        setValues({
            id: '', firmNameId: '', webSiteId: '', telNoId: '', passwordId: '', rePasswordId: '', emailId: ''
        });
        setEmployerList([]);
        setValidated(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        addOrEditEmployer(values);
        setValidated(true);
    };

    function addOrEditEmployer(values) {

        const params = {
            id: values.id,
            firmName: values.firmNameId,
            person: {
                id: values.id,
                email: values.emailId,
                password: values.passwordId,
                telNo: values.telNoId
            },
            webSite: values.webSiteId
        };

        let employerService = new EmployerService()

        if (params.id) {
            employerService.editEmployer(params).then(res => {
                if (res.data.success === true) {
                    toast.info(res.data.message)
                    clear();
                } else {
                    toast.error(res.data.message)
                }
            });
        } else {
            employerService.addEmployer(params).then(res => {
                if (res.data.success === true) {
                    toast.info(res.data.message)
                    clear();
                } else {
                    toast.error(res.data.message)
                }
            });
        }
    }

    let updateEmployer = (object) => {
        const params = {
            id: object.id,
            firmNameId: object.firmName,
            webSiteId: object.webSite,
            emailId: object.person.email,
            telNoId: object.person.telNo,
            passwordId: object.person.password,
            rePasswordId: object.person.password
        }
        setValues(params);
    }

    let getEmployerList = (values) => {
        let employerService = new EmployerService();
        const params = {
            firmName: values.firmNameId,
            email: values.emailId,
            telNo: values.telNoId,
            webSite: values.webSiteId
        };

        employerService.getEmployerList(params,0,5).then(result => {
            setEmployerList(result.data.data)
        });
    }

    return (
        <div>
            <Form id="employerForm" onReset={clear} noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label className='font-weight-bold'>Firm Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="firmNameId"
                            name="firmNameId"
                            value={values.firmNameId}
                            onChange={onChangeHandler}
                            placeholder="Firm Name"/>
                        <Feedback type="invalid">Firm name is required!</Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label className='font-weight-bold'>Web Site</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="webSiteId"
                            name="webSiteId"
                            value={values.webSiteId}
                            onChange={onChangeHandler}
                            placeholder="Web Site"/>
                        <Feedback type="invalid">Web Site is required!</Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label className='font-weight-bold'>Password</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="passwordId"
                            name="passwordId"
                            value={values.passwordId}
                            onChange={onChangeHandler}
                            placeholder="password"/>
                        <Feedback type="invalid">Password is required!</Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label className='font-weight-bold'>Re-Password</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="rePasswordId"
                            name="rePasswordId"
                            value={values.rePasswordId}
                            onChange={onChangeHandler}
                            placeholder="Re-Password"/>
                        <Feedback type="invalid">Re-Password is required!</Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label className='font-weight-bold'>Tel No</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            id="telNoId"
                            name="telNoId"
                            value={values.telNoId}
                            onChange={onChangeHandler}
                            placeholder="Tel No"/>
                        <Feedback type="invalid">Tel No is required!</Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label className='font-weight-bold'>Email Address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            id="emailId"
                            name="emailId"
                            value={values.emailId}
                            onChange={onChangeHandler}
                            placeholder="Enter email"/>
                        <Feedback type="invalid">Enter properly email address!</Feedback>
                    </Form.Group>
                </Form.Row>

                <Button type="submit" className='mr-2'>Kaydet</Button>
                <Button onClick={() => getEmployerList(values)} className='mr-2'>Ara</Button>
                <Button type="reset" className='mr-2'>Temizle</Button>
            </Form>

            {(employerList.length > 0) && <div className='mt-4'>
                <Title>İş verenler</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell className='font-weight-bold'>Firma Adı</TableCell>
                            <TableCell className='font-weight-bold'>Web Sitesi</TableCell>
                            <TableCell className='font-weight-bold'>Email</TableCell>
                            <TableCell className='font-weight-bold'>Tel No</TableCell>
                            <TableCell className='font-weight-bold'></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {employerList.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.firmName}</TableCell>
                                <TableCell>{row.webSite}</TableCell>
                                <TableCell>{row.person.email}</TableCell>
                                <TableCell>{row.person.telNo}</TableCell>
                                <TableCell><Button onClick={() => updateEmployer(row)}>Düzenle</Button></TableCell>
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
