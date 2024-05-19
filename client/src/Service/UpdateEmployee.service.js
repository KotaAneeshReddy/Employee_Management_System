const API_URL = "http://localhost:8080";

export async function updateEmployee(employee) {
  try {
    const response = await fetch(API_URL + "/putEmployee", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

