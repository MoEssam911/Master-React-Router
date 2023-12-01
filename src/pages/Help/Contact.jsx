import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();
  console.log("data:", data);

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {/* the action will be fired when the form is submitted, so we set a path and handle action in this route*/}
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

// "request" is all our form data
export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    // get(whatever the name of the input is)
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  // we will have an access on what we return in "useFormData()"
  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long." };
  }

  // redirect the user
  return redirect("/");
};

export default Contact;
