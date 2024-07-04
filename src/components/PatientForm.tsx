import { useForm } from "react-hook-form";
import Error from "./Error";

const PatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerPatient = () => {};
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {""}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Patient name"
            {...register("name", { required: "Please enter a name" })}
          />
          {errors.name && <Error>{errors.name?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Owner
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Caretaker name"
            {...register("caretaker", { required: "Please enter a Caretaker" })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker?.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Discharge date
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", { required: "Please enter a discharge date" })}
          />
          {errors.date && <Error>{errors.date?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Patient Symptoms"
            {...register("symptoms", { required: "Symptoms are required" })}
          />
          {errors.symptoms && (
            <Error>{errors.symptoms?.message?.toString()}</Error>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
};
export default PatientForm;
