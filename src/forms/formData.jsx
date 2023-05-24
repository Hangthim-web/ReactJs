import { useState } from "react";

const FormDataComponent = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    console.log(name);

    const newUser = Object.fromEntries(formData);
    console.log(newUser);

    setValue(value + 1);
    e.currentTarget.reset();
  };
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <h1>Form data</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default FormDataComponent;
