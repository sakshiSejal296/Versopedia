# 🌸 VerseVault-Versopedia

*A digital sanctuary where poetry meets personal reflection.*

Welcome to **VersOpedia**, a poetic backend that brings the elegance of verses and the depth of human emotions into code. This RESTful API server is the quiet engine behind a reflective experience — allowing each poem to find its way to a heart, and every reflection to return to the sky.

There is no frontend yet — just the soul of the system, quietly listening for words.

---

## 🔗 Live Repository Link

> [GitHub Repository: Versopedia](https://github.com/sakshiSejal296/versopedia)


---

## 🌐 API Overview

These are the whispers of the server — endpoints to read, respond, and resonate:

### 1. **Get Today's Poem**

* **Endpoint:** `GET /api/reflections/poem/today`
* **Functionality:** Fetches the poem assigned to today's date.

### 2. **Submit a Reflection**

* **Endpoint:** `POST /api/reflections`
* **Functionality:** Allows a user to submit their reflection on a poem.
* **Body Example:**

```json
{
  "poemId": 1,
  "content": "This poem reminded me of my school days...",
  "author": "Sakshi"
}
```

### 3. **Get Reflections for a Poem**

* **Endpoint:** `GET /api/reflections/:poemId`
* **Functionality:** Returns all reflections for a given poem.

### 4. **Delete a Reflection**

* **Endpoint:** `DELETE /api/reflections/:id`
* **Functionality:** Deletes a reflection by ID.

📄 For full API reference, see [`docs/API.md`](./docs/API.md)

---

## 🗄️ Database

* **Database Used:** PostgreSQL
* **ORM:** Prisma
* **Schema Includes:**

  * `Poem` table — for storing verses marked by time
  * `Reflection` table — where every heart leaves a trace

Prisma gracefully handles querying and migration through the `prisma` folder.

---

## 🚀 Running the Server

### Prerequisites

* Node.js
* PostgreSQL

### Steps:

```bash
git clone https://github.com/sakshiSejal296/versopedia
cd versopedia
npm install
npx prisma generate
npx prisma migrate dev --name init
node server.js
```

Your poem-powered server will start at:

```
http://localhost:5000
```

---

## 🧪 How to Interact With the API

Use any of the following to test:

* 🌀 Thunder Client (VS Code)
* 🧪 Postman
* 🌐 Browser (for GET requests)

### Example: Submit a Reflection

```http
POST http://localhost:5000/api/reflections
```

```json
{
  "poemId": 1,
  "content": "These verses moved me deeply",
  "author": "Sejal"
}
```

### Example: Get Reflections

```http
GET http://localhost:5000/api/reflections/1
```

---

## 👩‍💻 Developed By

**Sakshi Priya**
B.Tech CSE @ KIIT
Backend Poetry in Code — *June 2025*

> *"Here, the code is calm. The data flows like thought. And every request carries a verse."*
