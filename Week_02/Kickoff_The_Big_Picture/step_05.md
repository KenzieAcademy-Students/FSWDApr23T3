# Continuous Integration and Continuous Deployment (CI/CD Pipeline)

Once a set of features is completed and it is decided that the application should be release in its current form (either as a new product or an update to an existing product), the branch with all features is pushed through the CI/CD pipeline.

CI/CD involves creating a series of tests to ensure the application will work in its curren state. Typically, this involves a large suite of unit tests that are executed. If a pre-determined percentage of these tests pass, then the branch will be pulled into the deployed version pipeline, and the application is updated. However, if the tests fail, a warning message will be displayed somewhere, and the deployed application will not be updated.