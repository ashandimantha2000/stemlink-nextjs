import { createUser } from "../actions/user-actions";

function UserForm() {
  return (
    <div>
      <form action={createUser}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
