import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {

  // if there is an error in careers routing if the id does not exist
  // useRouteError this returns the error that we throw if !res.ok
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to={'/'}>Back to homepage</Link>
    </div>
  );
};

export default CareersError;
