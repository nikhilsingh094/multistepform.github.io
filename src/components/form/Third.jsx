import { useContext} from "react";
import { multiStepContext } from "../../StepFormProvider";

const ProfessionalDetailsForm = () => {
  const { setCurrStep, userData, setUserData } =
    useContext(multiStepContext);

  return (
    <div className="professional-form">
      <h2>Professional Details</h2>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            value={userData.jobTitle}
            onChange={(e) =>
              setUserData({ ...userData, jobTitle: e.target.value })
            }
            type="text"
            className="form-control"
            id="jobTitle"
            name="jobTitle"
            placeholder="Enter job title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            value={userData.company}
            onChange={(e) =>
              setUserData({ ...userData, company: e.target.value })
            }
            type="text"
            className="form-control"
            id="company"
            name="company"
            placeholder="Enter company name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Years of Experience</label>
          <input
            value={userData.experience}
            onChange={(e) =>
              setUserData({ ...userData, experience: e.target.value })
            }
            type="number"
            className="form-control"
            id="experience"
            name="experience"
            placeholder="Enter years of experience"
          />
        </div>
        <button
          onClick={() => setCurrStep(2)}
          className="btn btn-success btn-block"
        >
          Back
        </button>
        <button type="submit" style={{marginLeft:'1rem'}} className="btn btn-light btn-block">
          Submit
        </button>
    </div>
  );
};

export default ProfessionalDetailsForm;
