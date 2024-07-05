import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Patient, PatientDraft } from "../types";
import { devtools, persist } from "zustand/middleware";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (patient: PatientDraft) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (patient: PatientDraft) => void;
};

const createPatient = (patient: PatientDraft): Patient => {
  return { ...patient, id: uuidv4() };
};
export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: "",
        addPatient: (patient) => {
          const newPatient = createPatient(patient);
          set((state) => ({ patients: [...state.patients, newPatient] }));
        },
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((p) => p.id !== id),
          }));
        },
        getPatientById: (id) => {
          set(() => ({ activeId: id }));
        },
        updatePatient: (patient) => {
          set((state) => ({
            patients: state.patients.map((p) =>
              p.id === state.activeId ? { id: p.id, ...patient } : p
            ),
            activeId: "",
          }));
        },
      }),
      { name: "patientStorage" }
    )
  )
);
