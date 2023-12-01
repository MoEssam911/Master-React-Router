import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut tempore,
        quasi non et, maxime error cupiditate ducimus necessitatibus alias
        reiciendis delectus inventore ab deserunt laboriosam, neque voluptatem
        ipsam sed provident.
      </p>

      <p>
        Go to the <Link to={'/'}>Hompage</Link>
      </p>
    </div>
  );
};

export default NotFound;
