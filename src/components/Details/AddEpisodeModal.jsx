import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { formAction } from '../../assets/store/formslice';
import { useHistory } from 'react-router-dom';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddEpisodeModal(props) {
    const history = useHistory()
    const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [valid,setValid]=React.useState(false)
  const [season,setSeason]=React.useState(0)
  const [episode,setEpisode]=React.useState(0)
  React.useEffect(()=>{
    if((season>=0 && episode>0)  ){
        setValid(true)
    }else{
        setValid(false)
    }

  },[season,episode])

  const setTheEpisode=()=>{
    const s=season.toString()
    const e=episode.toString()
    const number=s+e
    const episodeNumber=parseInt(number)
    if(valid){
        console.log(episodeNumber)

        dispatch(formAction.episodeHandler({episode:episodeNumber,scriptId:props.scriptId}))
        setOpen(false)
        history.push('/UploadScript')
    }

  }


  return (
    <div style={{background:'inherit'}}>
      <Button onClick={handleOpen}>Add More Episodes</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add the Episode Number
          </Typography>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridGap:'5px',padding:'10px'}}>
          <TextField
          value={season}
          onChange={(e)=>{setSeason(e.target.value)}}
          id="outlined-number"
          label="Season"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
              <TextField
          onChange={(e)=>{setEpisode(e.target.value)}}
          value={episode}
          id="outlined-number"
          label="Episode"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <></>
        <Button style={{gridColumn: '1/span 2',
    margin: '0 119px',
    paddingTop: '10px',}}
    disabled={valid?false:true}
    onClick={setTheEpisode}

    >add more</Button>
        </div>

         
        </Box>
      </Modal>
    </div>
  );
}