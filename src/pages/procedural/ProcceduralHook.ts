import { useEffect, useState } from 'react';
import { useProcedureMutation } from '../../store/procedure/ProcedureService';
import { useNavigate } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { ProceduralRoot } from '../../types/procedural';

const ProcceduralHook = () => {
  const navigate = useNavigate();

  const onClicInfo = (item: ProceduralRoot) => {
    navigate('/proceduralinfo', { replace: true, state: item });
  };

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs(new Date()),
  );
  const newDate = selectedDate?.format('YYYY-MM-DD');
  const [fetchProcedure, { isError, data, isSuccess, isLoading }] =
    useProcedureMutation();

  useEffect(() => {
    if (newDate) {
      fetchProcedure({ start: newDate });
    }
  }, [newDate]);

  const ubdateHandler = () => {
    if (newDate) {
      fetchProcedure({ start: newDate });
    }
  };

  return {
    onClicInfo,
    setSelectedDate,
    selectedDate,
    isError,
    data,
    isSuccess,
    isLoading,
    ubdateHandler,
  };
};

export default ProcceduralHook;
