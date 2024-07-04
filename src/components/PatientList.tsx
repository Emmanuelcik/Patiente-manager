import { usePatientStore } from "../store/usePatient";
import PatientDetails from "./PatientDetails";

const PatientList = () => {
  const patients = usePatientStore((state) => state.patients);
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Patients and Appointments
          </p>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Add Patients{" "}
            <span className="text-indigo-600 font-bold">And See Them Here</span>
          </h2>
        </>
      )}
    </div>
  );
};

export default PatientList;
