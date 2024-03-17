import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

type propsType = {
  onClic?: () => void;
  title?: any;
  clock?: string;
  service?: string;
  statuses_count?: any;
};
const ProceduralItem = (props: propsType) => {
  const { onClic, title, clock, service, statuses_count } = props;
  const start_time = dayjs(clock).format('HH:mm');

  return (
    <div className="w-full" onClick={onClic}>
      <Box className="flex justify-between border  p-[15px] cursor-pointer">
        <Box className="w-[10%]  flex justify-center items-center">
          <Box className=" py-[5px] px-[12px] bg-[#4CAF50] rounded-[50px] w-[57px]">
            <Typography className="text-[13px] text-[#fff]">
              {start_time}
            </Typography>
          </Box>
        </Box>
        <Box className="w-[70%]  ml-[10px] ">
          <Typography className="text-[16px] text-[#000]">{title}</Typography>
          <Typography className="text-[12px] text-[#888787]">
            {service}
          </Typography>
        </Box>
        <Box className="w-[20%] flex justify-end items-center">
          <Typography className="text-[12px] text-[#888787]">
            {statuses_count?.done_count}/{statuses_count?.overall_count}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ProceduralItem;
