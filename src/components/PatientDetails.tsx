import { toast } from "react-toastify";
import { usePatientStore } from "../store/usePatient";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label={"ID"} value={patient.id} />
      <PatientDetailItem label={"Name"} value={patient.name} />
      <PatientDetailItem label={"Caretaker"} value={patient.caretaker} />
      <PatientDetailItem label={"Email"} value={patient.email} />
      <PatientDetailItem label={"Date"} value={patient.date.toString()} />
      <PatientDetailItem label={"Symptoms"} value={patient.symptoms} />

      <div className="flex justify-between mt-10 flex-col md:flex-row gap-3">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Edit
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            deletePatient(patient.id);
            toast.error("Patient Deleted Successfully");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
