import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Service } from '../../types/procedural';
type propsType = {
  title?: string;
  data?: any;
  service?: Service;
};
const PatientInformation = (props: propsType) => {
  const last_visit_at = dayjs(props.data.last_visit_at).format('D MMMM');

  return (
    <Box className="flex flex-col items-left border p-[15px] ">
      <Box className="text-left ">
        <Typography className="text-[14px] text-[#2196F3]  font-medium leading-5">
          {props?.title}
        </Typography>
      </Box>
      <Box>
        <Box className=" text-left ">
          {props?.data?.issued_data && (
            <>
              <Typography className="text-[12px] text-[#888787] font-normal leading-5 ">
                Даты пребывания
              </Typography>
              <Typography className="text-[12px] text-[#000] font-normal leading-5">
                {last_visit_at}
              </Typography>
            </>
          )}
          {props?.data?.program && (
            <>
              <Typography className="text-[12px] text-[#888787] font-normal leading-5 ">
                Программа
              </Typography>
              <Typography className="text-[12px] text-[#000] font-normal leading-5">
                {last_visit_at}
              </Typography>
            </>
          )}
          {props.data.address && (
            <>
              <Typography className="text-[12px] text-[#888787] font-normal leading-5 ">
                Комната
              </Typography>
              <Typography className="text-[12px] text-[#000] font-normal leading-5">
                {props?.data?.address}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PatientInformation;
