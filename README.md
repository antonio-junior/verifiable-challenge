# Instructions

- The report is at [REPORT.md](REPORT.md)

- To run the tests on Postman, import the [collection](verifiable-challenge.postman_collection.json), create an environment and add the variables: **email** / **password**. Then, associate the environment to the imported collection.

- To run the tests locally, create a file **cypress.env.json** in the project root with following format:

```json
{
  "email": "<email>",
  "password": "<password>"
}
```

and run

```sh
npx cypress run --headless --browser chrome
```

or

```sh
npm run test
```

- To run the tests on Github Actions, add the secrets EMAIL and PASSWORD. After push to master, the build and tests run automatically.
