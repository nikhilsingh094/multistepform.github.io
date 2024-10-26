import { useContext} from "react";
import { multiStepContext } from "../../StepFormProvider";

const AddressForm = () => {
  const { setCurrStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div className="address-form">
      <h2>Address Details</h2>
        <div className="form-group">
          <label htmlFor="street">Street Address</label>
          <input
            value={userData.street}
            onChange={(e) =>
              setUserData({ ...userData, street: e.target.value })
            }
            type="text"
            className="form-control"
            id="street"
            name="street"
            placeholder="Enter street address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            value={userData.city}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="Enter city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            value={userData.state}
            onChange={(e) =>
              setUserData({ ...userData, state: e.target.value })
            }
            type="text"
            className="form-control"
            id="state"
            name="state"
            placeholder="Enter state"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input
            value={userData.zip}
            onChange={(e) => setUserData({ ...userData, zip: e.target.value })}
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            placeholder="Enter zip code"
          />
        </div>
        <button
          onClick={() => setCurrStep(1)}
          className="btn btn-success btn-block"
        >
          Back
        </button>
        <button
        style={{marginLeft:'1rem'}}
          onClick={() => setCurrStep(3)}
          className="btn btn-success btn-block"
        >
          Next
        </button>
    </div>
  );
};

export default AddressForm;
