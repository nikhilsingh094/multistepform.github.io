import { useContext} from "react";
import { multiStepContext } from "../../StepFormProvider";

const PersonalDetailsForm = () => {
  const { setCurrStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div className="form-container">
      <h2 className="form-title">Personal Details</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          onClick={() => setCurrStep(2)}
          className="btn btn-primary btn-block"
        >
          Next
        </button>
    </div>
  );
};

export default PersonalDetailsForm;
