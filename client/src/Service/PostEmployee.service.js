const API_URL = "http://localhost:8080";

async function PostEmployee(employee) {
  try {
    const response = await fetch(API_URL + "/postEmployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export default PostEmployee;
