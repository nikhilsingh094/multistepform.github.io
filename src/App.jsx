import { useContext } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/form/First";
import AddressForm from "./components/form/Second";
import ProfessionalDetailsForm from "./components/form/Third";
import { multiStepContext } from "./StepFormProvider";
import Display from "./components/Display";

function App() {
  const { currStep, submitForm } = useContext(multiStepContext);

  const showStepForm = (step) => {
    switch (step) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <AddressForm />;
      case 3:
        return <ProfessionalDetailsForm />;
    }
  };

  return (
    <>
      <form onSubmit={(e) => submitForm(e)}>{showStepForm(currStep)}</form>
      <Display />
    </>
  );
}

export default App;
