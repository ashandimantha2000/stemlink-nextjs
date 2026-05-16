"use server";


//fake database
const users = [];

export async function createUser(formData) {
  const name = formData.get("name");

  //   console.log("User Name: ", name);

  users.push({
    id: Date.now(),
    name,
  });

  console.log("User database ", users);
}
