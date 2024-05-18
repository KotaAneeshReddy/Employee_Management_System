// EmployeeService.js
const API_URL = "http://localhost:8080";

async function getEmployees() {
  try {
    const response = await fetch(API_URL + "/getEmployees", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
}

export { getEmployees };
