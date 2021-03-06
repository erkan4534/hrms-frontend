import React, {useState, useEffect} from 'react'
import JobAdvertService from "../services/JobAdvertService";
import {Button, Table} from "reactstrap";
import {Container} from "react-bootstrap";
import Title from "../layouts/Title";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {getJobAdvertList} from "../store/actions/JobAdvertActions";

function JobAdvertList() {

    const dispatch = useDispatch();

    const [jobAdverts, setJobAdverts] = useState([]);

    const useStyles = makeStyles((theme) => ({
        seeMore: {
            marginTop: theme.spacing(3),
        },
    }));

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data));
    }, [])

    const handleGetJobAdvertList=(jobAdvert)=>{
        dispatch(getJobAdvertList(jobAdvert))
    }

    return (
        <React.Fragment>
            <Title>İş ilanları</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Firma Adı</TableCell>
                        <TableCell>Pozisyon Adı</TableCell>
                        <TableCell>Açık POzisyon Adı</TableCell>
                        <TableCell>Oluşturulma Tarihi</TableCell>
                        <TableCell align="right">Bitiş Tarihi(Deadline)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobAdverts.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.firmName}</TableCell>
                            <TableCell>{row.positionName}</TableCell>
                            <TableCell>{row.openPositionsNumber}</TableCell>
                            <TableCell>{row.createDate}</TableCell>
                            <TableCell align="right">{row.applyDeadline}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

           <Button onClick={()=>handleGetJobAdvertList()}>deneme</Button>

        </React.Fragment>

    );
}

export default JobAdvertList;
