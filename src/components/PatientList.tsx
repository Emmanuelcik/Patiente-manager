import { usePatientStore } from "../store/usePatient";

const PatientList = () => {
  const patients = usePatientStore((state) => state.patients);
  console.log(patients);
  return <div></div>;
};

export default PatientList;
