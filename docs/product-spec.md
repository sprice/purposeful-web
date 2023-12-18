# Purposeful

## Company Purpose

Purposeful exists to use the best of brain science to build high-performing
individuals, teams, and organizations.

## First Product

The first Purposeful product will be an "Offistes" tool for startup founders.
This tool will help a founding team understand some of their brain and how it
works and give context for how to run a great offsite/strategy/planning session.

The tool we build will be a web UI with the following features:

1. Educational video content to teach people about the brain and how that
   relates to them building high performance habits
2. Forms for them to enter information that will be needed to craft an optimal
   slide deck for them to bring to their offsite/strategy/planning session
3. The ability for them to download their slide deck as a PDF.

## Web App Technical Design

The Web app is built using Next.js, React, Tailwind, Prisma, and MySQL.

We are currently leaning heavily on template components from tailwindui.com.

We also have Storyboard wired up to display our components in a Design System.

### Authentication

We are using the service clerk.com for authentication. Our Users table needs to
have a `clerkId` field which is a string and then we have a tiny bit of
middleware code that reads from the Users table and updates it as necessary,
storing an email in the `email` field.

The configuration of clerk within the codebase also allows us to set a single
variable to set which page routes are publicly accessible and are only
accessible to authenticated users. In order to authenticate roles to certain
routes we add an additional layer of code to do that.

## Offiste Tool Technical Design

There will be three roles of users: Admin, Facilitator, Participant.

### Creating Surveys

Admin users have permission to create, edit, and archive Surveys. A Survey is a
collection of Questions along with each questions custom data (title,
description).

There will be multiple Question types, which may include, and not be limited to
the following.

- Display two or more options as a stylized square, select the option that
  applies
- Choose an option from a select list
- Choose multiple options from a select list
- Enter a text field
- Enter a text description box
- Enter a date

Each of these would have title text, description text, and a submit button.

As an admin, we will create new surveys by piecing together a set of these
QuestionTypes including the appropriate title and description.

A Survey will be saved to the database and that Survey will have a name, and id,
and a reference to each of the QuestionTypes in the correct order, each of the
QuestionTypes having the specific title and description text.
