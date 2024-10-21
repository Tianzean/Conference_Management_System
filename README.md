# Conference Management System

Conference Management application is built with MERN stack, and utilizes third party API's. This CMS enable three main different implementations:

1. A reviewer of the conference logs into their online account and can view the list of papers assigned
to them to review. For each paper they see: paper title, authors, keywords, abstract, pdf
attachment, and name of author that submitted the paper- Implemented by Drisya
2. The reviewer has the option to enter a review for a paper. Details to enter are: overall score (2
accept to -2 reject), review details, private comments to other reviewers and conference
organizers. The reviewer can save their review in draft format for future editing. When the reviewer
clicks submit on their review, they cannot make further edits to the review- Implemented by Suramya
3. When a reviewer submits their review for a paper, they can see the other reviews already
submitted for the paper. Their review is also visible to other reviewers who have already submitted
a review; but hidden from those who have not yet submitted their review- Implemented by Tianze

Features:

Node provides the backend environment for this application.
Express middleware is used to handle requests, routes.
Mongoose schemas to model the application data.
React for displaying UI components.
Redux to manage application's state.
Redux Thunk middleware to handle asynchronous redux actions.

# Link to Repository
[Repository Link]
https://github.com/drisyad1992/cms_new.git


# Install
Some basic Git commands are:
```
$ git clone https://github.com/drisyad1992/cms_new.git
$ npm install concurrently react react-router-dom axios react-dom @reduxjs/toolkit react-redux react-toastify react-icons

```

# Setup

```
 Create .env file that include:

NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://drisyad:drisyad@cluster0.cxy7iym.mongodb.net/mernapp?retryWrites=true&w=majority
JWT_SECRET=abc123

```

# Running the application

```
$ npm run dev
```

# Languages & tools

- Node
- Express
- Mongoose
- React

# Authors

- Suramya Suresh Babu (22251388)
- Drisya Damodharan (22250267)
- Tianze An (22250240)

