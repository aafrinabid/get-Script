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
import { useDispatch,useSelector } from 'react-redux';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { ProducerActions } from '../../../assets/store/producerSlice';

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const addProducer=id=>{
    console.log('happening at add')

    dispatch(ProducerActions.addProducers(id))
  }
    const removeProducer=id=>{
        console.log('happening')
        dispatch(ProducerActions.rejectProducers(id))
    }
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
        {props.state?(<TableCell align="right"><IconButton onClick={removeProducer.bind(null,row.id)}><RemoveCircle/></IconButton></TableCell>):
        <React.Fragment>
        <TableCell align="right"> <IconButton onClick={addProducer.bind(null,row.id)}><AddCircle/></IconButton> </TableCell>
        <TableCell align="right"><IconButton onClick={removeProducer.bind(null,row.id)}><RemoveCircle/></IconButton></TableCell>
        </React.Fragment>
        }
        
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
                    <TableCell>No. of Film Produced</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Country</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
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
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable(props) {
    const producers=useSelector(state=>state.ProducerHandler.producers)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Producer Association Id</TableCell>
          { props.state?(<TableCell align="right"></TableCell>):(
  <React.Fragment>
<TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            </React.Fragment>
          )
          }  
          </TableRow>
        </TableHead>
        <TableBody>
          {producers.filter(producer=>producer.accepted===props.state).map((producer) => (
            <Row key={producer.name} row={producer} state={props.state}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

