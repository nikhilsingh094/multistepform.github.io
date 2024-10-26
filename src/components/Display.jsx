
import{ useContext } from "react";
import { multiStepContext } from "../StepFormProvider";


function Display() {
  const { finalData } = useContext(multiStepContext);

  return (
    <div className="table-container">
      <h2>Submitted Data</h2>
      {finalData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              {/* Add more headers here if needed */}
            </tr>
          </thead>
          <tbody>
            {finalData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                {/* Add more cells here if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
}

export default Display;
