# hacktivoverflow

### Below are the URLs and the operations associated with them.
---
| Method | URL | Description | Parameter | 
| ------ | ------ | ------ | ------ | 
| POST | ````/users/register```` | Sign up with new user info | [body.email], [body.password]| 
| POST | ```/users/login``` | Sign in while get an access token based on credentials | [body.email], [body.password] |
| GET | ````/questions```` | Get all the questions |  |
| POST | ````/questions/:id```` | Create new question | [headers.token], [params.id], [body.title], [body.question] |
| PUT | ````/questions/:id```` | Update a question| [headers.token], [params.id], [body.title], [body.question] | 
| DELETE | ````/questions/:id```` | Delete a question| [headers.token], [params.id] | 
| GET | ````/answers```` | Get answers |  |
| POST | ````/answers/:id```` | Create new answer | [headers.token], [params.id], [body.title], [body.answer] |
| PUT | ````/answers/:id```` | Update a answer| [headers.token], [params.id], [body.title], [body.answer] | 
| DELETE | ````/answers/:id```` | Delete a answer| [headers.token], [params.id] | 

* **URL:**  
/users/register
* **Method:**
`POST`
 * **Success Response:**
    * **Code:** 201
    * **Content:** 
    `{
        email: string,
        password: string,
        source: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
        message: err.message
    }`
 ***

 * **URL:**  
/users/login
* **Method:**
`POST`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
      token: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
      message: err.message
    }`
 ***
* **URL:**  
/questions
* **Method:**
`POST`
 * **Success Response:**
    * **Code:** 201
    * **Content:** 
    `{
        id: ObjectId,
        title: string,
        question: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
        message: err.message
    }`
 ***
  * **URL:**  
/questions/:id
* **Method:**
`PUT`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        message: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
        message: err.message
    }`
 ***
 * **URL:**  
/questions/:id
* **Method:**
`DELETE`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        message: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
        message: err.message
    }`
 ***

 * **URL:**  
/answers
* **Method:**
`POST`
 * **Success Response:**
    * **Code:** 201
    * **Content:** 
    `{
        id: ObjectId,
        title: string,
        answer: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
        message: err.message
    }`
 ***
  * **URL:**  
/answers/:id
* **Method:**
`PUT`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        message: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
        message: err.message
    }`
 ***
 * **URL:**  
/answers/:id
* **Method:**
`DELETE`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        message: string
    }`
    ````
 * **Error Response:**
    * **Code:** 500
    * **Content:** `{
        message: err.message
    }`
 ***