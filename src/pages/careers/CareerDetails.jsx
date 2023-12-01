import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details For {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        cumque modi facere provident quis doloribus labore eum architecto quasi
        doloremque, magnam ea veritatis, aut assumenda nulla officia. Nisi, sit
        sapiente.
      </div>
    </div>
  );
};

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);
  
  if (!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json();


};

export default CareerDetails;
