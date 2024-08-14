# LIBRARY API

This API allows you to manage a collection of books. The available endpoints are described below.

## Endpoints

### Get All Books

#### GET `/api/books`

**Description:** Returns a list of all books.

**Successful Response:**
- **Code:** 200 OK
- **Body:** Array of Book Objects

- Example Response:
    ```json
  [
     {
        "id": 1,
        "title": "One Hundred Years of Solitude",
        "category": "novel",
        "available": true,
        "author": {
            "id": 1,
            "name": "Gabriel García Márquez",
            "country": "Colombia"
         }
      }
  ]
    ```

### Get Book by ID

#### GET `/api/books/{id}`

**Description:** Returns a specific book based on the provided ID.

**Parameters:**

- **Path Variable:** `id` (Long) - Book ID

**Successful Response:**

- **Code:** 200 OK
- **Body:** Book Object

**Response if the book is not found:**

- **Code:** 404 Not Found

### Create a New Book

#### POST `/api/books`

**Description:** Saves a book to the database.

**Request Body:**

- **Type:** JSON
- **Example:**
    ```json
    {
        "title": "One Hundred Years of Solitude",
        "category": "novel",
        "available": true,
        "author": {
            "id": 1
        }
    }
    ```

**Successful Response:**

- **Code:** 200 OK
- **Body:** Book Object

### Delete a Book

#### DELETE `/api/books/{id}`

**Description:** Deletes a book based on the provided ID.

**Parameters:**

- **Path Variable:** `id` (Long) - Book ID

**Successful Response:**

- **Code:** 204 No Content

### Update a Book

#### PUT `/api/books/{id}`

**Description:** Updates an existing book based on the provided ID.

**Parameters:**

- **Path Variable:** `id` (Long) - Book ID

**Request Body:**

- **Type:** JSON
- **Example:**
    ```json
    {
        "title": "One Hundred Years of Solitude",
        "category": "novel",
        "available": true,
        "author": {
            "id": 1
        }
    }
    ```

**Successful Response:**

- **Code:** 200 OK
- **Body:** Book Object

**Response if the book is not found:**

- **Code:** 404 Not Found

### Get Books by Author

#### GET `/api/books/author/{authorId}`

**Description:** Returns a list of books based on the provided author ID.

**Parameters:**

- **Path Variable:** `authorId` (Long) - Author ID

**Successful Response:**

- **Code:** 200 OK
- **Body:** Array of Book Objects

- Example Response:
    ```json
    [
        {
            "id": 1,
            "title": "One Hundred Years of Solitude",
            "category": "novel",
            "available": true,
            "author": {
                "id": 1,
                "name": "Gabriel García Márquez",
                "country": "Colombia"
            }
        }
    ]
    ```

### Get All Categories

#### GET `/api/books/categories`

**Description:** Returns a list of all available book categories.

**Successful Response:**

- **Code:** 200 OK
- **Body:** Array of Strings

- Example Response:
    ```json
    [
        "novel",
        "poetry",
        "science fiction"
    ]
    ```

### Get Books by Category

#### GET `/api/books/categories/{category}`

**Description:** Returns a list of books based on the provided category.

**Parameters:**

- **Path Variable:** `category` (String) - Book Category

**Successful Response:**

- **Code:** 200 OK
- **Body:** Array of Book Objects

- Example Response:
    ```json
    [
        {
            "id": 1,
            "title": "One Hundred Years of Solitude",
            "category": "novel",
            "available": true,
            "author": {
                "id": 1,
                "name": "Gabriel García Márquez",
                "country": "Colombia"
            }
        }
    ]
    ```

### Get All Authors

#### GET `/api/authors`

**Description:** Returns a list of all authors.

**Successful Response:**

- **Code:** 200 OK
- **Body:** Array of Author Objects

- Example Response:
    ```json
    [
        {
            "id": 1,
            "name": "Gabriel García Márquez",
            "country": "Colombia"
        }
    ]
    ```

### Get Author by ID

#### GET `/api/authors/{id}`

**Description:** Returns a specific Author based on the provided ID.

**Parameters:**

- **Path Variable:** `id` (Long) - Author ID

**Successful Response:**

- **Code:** 200 OK
- **Body:** Author Object

**Response if the Author is not found:**

- **Code:** 404 Not Found

### Create a New Author

#### POST `/api/Author`

**Description:** Saves Author to the database.

**Request Body:**

- **Type:** JSON
- **Example:**
    ```json
    [
        {
            "name": "Gabriel García Márquez",
            "country": "Colombia"
        }
    ]
    ```

**Successful Response:**

- **Code:** 200 OK
- **Body:** Author Object

### Delete Author

#### DELETE `/api/Author/{id}`

**Description:** Deletes Author based on the provided ID.

**Parameters:**

- **Path Variable:** `id` (Long) - Author ID

**Successful Response:**

- **Code:** 204 No Content

### Update Author

#### PUT `/api/Author/{id}`

**Description:** Updates an existing Author based on the provided ID.

**Parameters:**

- **Path Variable:** `id` (Long) - Author ID

**Request Body:**

- **Type:** JSON
- **Example:**
    ```json
        {
            "name": "Gabriel García Márquez",
            "country": "Colombia"
        }
    ]
    ```

**Successful Response:**

- **Code:** 200 OK
- **Body:** Author Object

**Response if the Author is not found:**

- **Code:** 404 Not Found
