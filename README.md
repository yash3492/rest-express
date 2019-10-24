# rest-express
---

#### Development
+ download git repo
+ remove `.git` for cleaning git traces.
+ install dependencies via `npm install`
+ Create `.env` file by copying content from `.env.sample`
+ Start dev server via `npm run dev` to run server in watch mode.
+ Run Unit Test Cases via `npm run test`.
+ happy coding..

#### Production server
+ Define Environment variable `set NODE_ENV=production` (windows) OR `export NODE_ENV=production` (Linux)
+ Similarly Define Environment variable for `DB_URL` (connection string to database)
+ Run `npm run start:prod` to run application in cluster mode.

#### Project Structure

```
/
├── [Public Assets folder] public
├── [Source folder] src
│   └── [Controller] controllers
│   └── [Model] db-interface
│   └── [View] views
│   └── [App Bootstraping file] index.js
│   └── [App Routes file] routes.js
├── [Test Case] test
├── [App Root file] index.js
```
