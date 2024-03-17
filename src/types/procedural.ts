export interface ProceduralRoot {
  id: number;
  service: Service;
  patient: Patient;
  room: Room;
  statuses_count: StatusesCount;
  start_time: string;
  end_time: string;
  status: string;
  illness_history: any;
  procedure_doctor: number;
}

export interface Service {
  id: number;
  rooms: any[];
  service_name: string;
  type: string;
  price: number;
  branch: any;
}

export interface Patient {
  id: number;
  f_name: string;
  mid_name: string;
  l_name: string;
  email: string;
  date_of_birth: string;
  home_phone_number: string;
  mobile_phone_number: string;
  address: string;
  additional_info: number;
  is_active: boolean;
  doc_type: string;
  doc_number: string;
  issued_data: string;
  INN: string;
  country: string;
  last_visit_at: string;
  created_at: string;
  modified_at: string;
  gender: boolean;
  information_source: number;
  organization: number;
  patient_group: any[];
}

export interface Room {
  id: number;
  room_number: string;
  price: number;
  is_available: boolean;
  count: number;
  floor: number;
  view: string;
  capacity: number;
  status_cleanest: string;
  room_task_type: string;
  created_at: string;
  modified_at: string;
  room_type: number;
  created_by: number;
  modified_by: number;
}

export interface StatusesCount {
  done_count?: number;
  overall_count?: number;
}
