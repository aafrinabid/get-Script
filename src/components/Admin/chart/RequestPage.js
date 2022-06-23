import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector, useDispatch } from 'react-redux';
import { AddBoxSharp, RemoveSharp } from '@material-ui/icons';
import { ProducerActions } from '../../../assets/store/producerSlice';

function createData(name,companyName,producerAssociationId,accepted,Details,id) {
  return {
    id,
    name,
    companyName,
    producerAssociationId,
    accepted,
    Details,
  };
}

function Row(props) {
    const dispatch=useDispatch();
  const { row } = props;
  console.log(row.Details.country)
  const [open, setOpen] = React.useState(false);
  const addRequest=dispatch(ProducerActions.addProducers(row.id));
  const removeUser=dispatch(ProducerActions.rejectProducers(row.id));

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.companyName}</TableCell>
        <TableCell align="right">{row.producerAssociationId}</TableCell>
        <TableCell align="right">
            <IconButton
            // aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          > <AddBoxSharp className='cursor-pointer' /> </IconButton>
          </TableCell>
        <TableCell align="right">
        <IconButton
            // aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          > <RemoveSharp className='cursor-pointer' /> 
          </IconButton> 
          </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Experience</TableCell>
                    <TableCell>No. of Produced Films</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Country</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => ( */}
                    <TableRow >
                      <TableCell component="th" scope="row">
                        {row.Details.experience}
                      </TableCell>
                      <TableCell>{row.Details.numberOfProduced}</TableCell>
                      <TableCell align="right">{row.Details.address}</TableCell>
                      <TableCell align="right">
                        {row.Details.country}
                      </TableCell>
                    </TableRow>
                {/* //   ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     companyName: PropTypes.string.isRequired,
//     producerAssociationId: PropTypes.number.isRequired,
//     Details: PropTypes.objectOf(
//       PropTypes.shape({
//         experience: PropTypes.number.isRequired,
//         numberOfProduced: PropTypes.string.isRequired,
//         address: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     country: PropTypes.string.isRequired,
//   }).isRequired,
// };

  

export default function CollapsibleTable() {
const producers=useSelector(state=>state.ProducerHandler.producers)
console.log(producers)
// const rows = producers.map((producer)=> createData(producer.id,producer.name, producer.companyName,producer.producerAssociationId,producer.accepted,producer.Details))
// console.log(rows);
  return (
    <div className='bg-inherit h-screen'>
    <TableContainer component={Paper} className='bg-gray-500 text-white'>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Association Id</TableCell>
            <TableCell align="right">.</TableCell>
            <TableCell align="right">.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='text-white'>
          {producers.filter(row=>row.accepted===false).map((row) => (
            <>
            {console.log(row)}
            <Row key={row.id} row={row} />
            </>
          ))}
          {/* {producers.filter(row=>row.accepted===true).map((row) => (
            <Row key={row.id} row={row} />
          ))} */}

         
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
