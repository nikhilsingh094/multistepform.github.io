import { createContext, useState } from "react";

export const multiStepContext = createContext();

const StepFormProvider = ({ children }) => {
  const [currStep, setCurrStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    setFinalData(finalData=>[...finalData,userData])
    setUserData('');
    setCurrStep(1)


  };

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currStep,
          setCurrStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitForm,
        }}
      >
        {children}
      </multiStepContext.Provider>
    </div>
  );
};

export default StepFormProvider;
