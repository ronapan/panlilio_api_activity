Markdown
# RESTful API Activity - [PanlilioRonaJ._3D]

## Best Practices Implementation
**1. Environment Variables:**
 - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
 - Answer: Storing `BASE_URI` in a `.env` file allows us to easily change the API endpoint without modifying the code. It also keeps sensitive information, like API keys, secure and prevents accidental exposure when sharing code.

**2. Resource Modeling:**
 - Why did we use plural nouns (e.g., `/dishes`) for our routes?
 - Answer: Plural nouns represent collections of resources, which makes the API more intuitive. For example, `/dishes` clearly indicates a list of dish objects, while `/dish` could suggest a single item, causing confusion.

**3. Status Codes:**
 - When do we use `201 Created` vs `200 OK`?
 - Answer: `201 Created` is used when a new resource is successfully created (like after a POST request). `200 OK` is used for successful retrieval, update, or deletion of existing resources. 

 - Why is it important to return `404` instead of just an empty array or a generic error?
 - Answer: Returning `404 Not Found` accurately informs the client that the requested resource does not exist, preventing ambiguity. An empty array or generic error could mislead the client into thinking the request succeeded but no data exists, which can lead to logical errors in the application. 


**4. Testing:**
 - (Paste a screenshot of a successful GET request here)
 ![Successful GET request](screenshot.png)