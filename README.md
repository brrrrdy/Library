# Library

https://brrrrdy.github.io/Library

![Library screenshot](https://github.com/brrrrdy/Portfolio/blob/main/src/assets/images/proj_images/scrn_library.webp?raw=true)

## REQUIREMENTS

- Books stored as objects in an array using a constructor function
- Each book assigned a unique ID via `crypto.randomUUID()`
- Books displayed as cards, looped from the array
- "New Book" form to add books with title, author, pages, and read status
- Remove button on each book card
- Toggle read status button on each book card
- DOM elements linked to book objects via `data-id` attributes

## ABOUT

A small library app built as part of The Odin Project JavaScript course, designed to
practise working with objects, constructors, and the separation of data logic from
DOM manipulation.

Books are stored as structured objects in an array, with the display layer kept
deliberately separate from the underlying data. Each book is assigned a stable unique
ID using `crypto.randomUUID()`, which keeps removal and updates reliable regardless
of how the list is ordered. New books are added via a form using `event.preventDefault()`
to handle submission without a page reload.

## BUILT WITH

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
