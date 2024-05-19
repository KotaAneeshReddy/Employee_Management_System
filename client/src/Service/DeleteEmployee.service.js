const API_URL = "http://localhost:8080";

async function deleteEmployee(employee) {
  try {
    const response = await fetch(`${API_URL}/deleteEmployee`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    // const result = await response.json();
    // console.log("Success ", result);
    // return result;
    console.log("Success ", response);
  } catch (error) {
    console.log("Error ", error);
  }
}

export { deleteEmployee };
