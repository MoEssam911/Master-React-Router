import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  // 'useLoaderData' returns the loaded data from (loader)
  // here the data is the return of 'careersLoader()' which is in the loader in the route
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

// loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Could not fetch career");
  }

  return res.json();
};

export default Careers;
