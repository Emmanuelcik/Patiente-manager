import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Patient, PatientDraft } from "../types";

type PatientState = {
  patients: Patient[];
  addPatient: (patient: PatientDraft) => void;
};

const createPatient = (patient: PatientDraft): Patient => {
  return { ...patient, id: uuidv4() };
};
export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (patient) => {
    const newPatient = createPatient(patient);
    set((state) => ({ patients: [...state.patients, newPatient] }));
  },
}));
