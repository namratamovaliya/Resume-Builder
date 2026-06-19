# Resume Builder

A Full Stack Resume Builder Application built using React.js and Django REST Framework.

## Features

- User Registration & Login
- Create Resume
- View Resume
- Edit Resume
- Delete Resume
- Dynamic Resume Preview
- PDF Download
- SQLite Database

## Technologies Used

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Bootstrap

### Backend
- Python
- Django
- Django REST Framework

### Database
- SQLite

## Project Structure

Resume-Builder/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── manage.py
│   ├── resumes/
│   └── requirements.txt
│
└── README.md

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
