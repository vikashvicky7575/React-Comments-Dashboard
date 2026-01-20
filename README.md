# React Comments Application

A simple and clean **ReactJS application** to fetch, display, search, paginate, add comments and stored in local storage.  
This project is built using React Hooks with a focus on clean code and readability.

## Features

- Fetch comments from public Fake API
- Display comments in a clean UI
- Add new comments (stored in `localStorage`)
- Search comments by **name** or **email**
- Pagination with:
  - Page numbers
  - Previous / Next arrows
- Responsive and modern UI
- Error handling & loading state

---

## Technologies Used

- **React.js**
- **React Hooks** (`useState`, `useEffect`, `useMemo`)
- **CSS Modules**
- **JavaScript (ES6+)**
- **LocalStorage**

---

## API Used
https://jsonplaceholder.typicode.com/comments


## Project Structure
src/
│
├── components/
│   ├── CommentList/
│   ├── CommentForm/
│   ├── Pagination/
│   └── SearchBar/
│
├── services/
│   └── commentService.js
│
├── App.js
├── App.module.css
└── index.js

## Installation & Setup
### 1. Clone the repository
git clone https://github.com/vikashvicky7575/React-Comments-Dashboard.git

### 2.Navigate to the project folder
cd react-comments-task

### 3.Install dependencies
npm install

### 4.Run the application
npm start

### 5.Open in browser
http://localhost:3000
