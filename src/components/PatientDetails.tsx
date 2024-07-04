import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label={"ID"} value={patient.id} />
      <PatientDetailItem label={"Name"} value={patient.name} />
      <PatientDetailItem label={"Caretaker"} value={patient.caretaker} />
      <PatientDetailItem label={"Email"} value={patient.email} />
      <PatientDetailItem label={"Date"} value={patient.date.toString()} />
      <PatientDetailItem label={"Symptoms"} value={patient.symptoms} />
    </div>
  );
};

export default PatientDetails;
