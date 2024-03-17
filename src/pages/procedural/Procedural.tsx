import { Box } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import DefaultButton from '../../components/deafultButton/DefaultButton';
import ProceduralItem from '../../components/proceduralItem/ProceduralItem';
import ProcceduralHook from './ProcceduralHook';
import { ProceduralRoot } from '../../types/procedural';

const Procedural = () => {
  const { onClicInfo, setSelectedDate, selectedDate, data, ubdateHandler } =
    ProcceduralHook();
  console.log('data', JSON.stringify(data, null, 2));

  return (
    <div className=" w-full bg-[#fff] h-[calc(100vh-76px)] ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box className="h-[calc(100vh-150px)]  w-full overflow-hidden ">
          <Box className="w-full px-[10px] mt-[10px]">
            <DemoContainer components={['StaticDatePicker']}>
              <DemoItem>
                <MobileDatePicker
                  slotProps={{ textField: { size: 'small' } }}
                  orientation="landscape"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                />
              </DemoItem>
            </DemoContainer>
          </Box>
          <Box className="p-[10px] w-full  h-[calc(100%-70px)]  overflow-scroll mt-[10px]">
            {data?.map((item: ProceduralRoot, index: number) => {
              return (
                <ProceduralItem
                  key={index}
                  title={item?.patient?.f_name}
                  onClic={() => onClicInfo(item)}
                  clock={item?.start_time}
                  service={item?.service?.service_name}
                  statuses_count={item?.statuses_count}
                />
              );
            })}
          </Box>
        </Box>
        <Box className=" w-full flex justify-center items-center px-[10px] mt-[10px] ">
          <DefaultButton
            title="Обновить"
            onClick={ubdateHandler}
            disabled={data?.length > 0 ? false : true}
          />
        </Box>
      </LocalizationProvider>
    </div>
  );
};
export default Procedural;
