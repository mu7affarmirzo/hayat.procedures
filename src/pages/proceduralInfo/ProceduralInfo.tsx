import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Dialog, DialogActions, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DefaultButton from '../../components/deafultButton/DefaultButton';
import ProceduralItem from '../../components/proceduralItem/ProceduralItem';
import PatientInformation from '../../components/patientInformation/PatientInformation';
import { ProceduralRoot } from '../../types/procedural';

const ProceduralInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const myState: ProceduralRoot | undefined = state;

  const onClick = () => {
    navigate('/procedural', { replace: true });
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(JSON.stringify(myState, null, 2));
  const title =
    String(myState?.patient?.l_name) + ' ' + String(myState?.patient?.f_name);

  return (
    <div className=" w-full bg-[#fff] h-[calc(100vh-76px)] ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box className="h-[calc(100vh-150px)]  w-full overflow-hidden ">
          <Box className="w-full px-[10px] mt-[10px] ">
            <button
              onClick={onClick}
              className="w-full bg-[#F5F5F5] h-[40px] rounded-[4px] border cursor-pointer text-left px-[10px] flex items-center"
            >
              <ArrowBackIosIcon
                sx={{ width: '20px', height: '20px', color: '#8a8a8a' }}
              />
              <Typography className="text-[12px]">
                {myState?.procedure_doctor} {'- '}
                {myState?.service?.service_name}
              </Typography>
              <Typography className="text-[12px] ml-[5px]">{title}</Typography>
            </button>
          </Box>
          <Box className="p-[10px] w-full  h-[calc(100%-70px)]  overflow-scroll mt-[10px]">
            <ProceduralItem title={title} />
            <PatientInformation
              title="ИНФОРМАЦИЯ О ПАЦИЕНТЕ"
              data={myState?.patient}
              service={myState?.service}
            />
            <PatientInformation
              title="КАБИНЕТ И ВРАЧ"
              data={myState?.service}
            />
            <PatientInformation
              title="ИСТОРИЯ ОТПУСКА (1 ИЗ З ОТПУЩЕНЫ)"
              data={myState?.room}
            />
          </Box>
        </Box>
        <Box className=" w-full flex justify-center items-center px-[10px] mt-[10px] ">
          <DefaultButton title="Обновить" onClick={handleOpen} disabled />
        </Box>
      </LocalizationProvider>

      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0',
              marginBottom: '100px',
            }}
          >
            <Typography> Отпускать пациента?</Typography>
            <HighlightOffIcon onClick={handleClose} />
          </DialogActions>

          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0',
              margin: '0',
              background: '#F5F5F5',
              paddingX: '15px',
              paddingY: '15px',
              width: '400px',
            }}
          >
            <DefaultButton onClick={handleClose} title="ОТПУСТИТЬ" />
            <DefaultButton
              onClick={handleClose}
              title="Отмена"
              classStyle="ml-[100px]"
            />
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};
export default ProceduralInfo;
