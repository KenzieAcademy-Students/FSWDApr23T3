# Pull Request and Code Review (Version Control)

Developers are not trusting individuals. You can say everything works, but we always want to verify before including a given feature. 

Once you have finished coding your feature, you'll commit the changes to your feature branch, and create a *pull request*. The pull request is a request to pull your feature branch back into the development branch.

Before agreeing to the merge, it is important that a code review is performed. 
- A code review can catch bad stuff/prevent leaks
- Can catch performance issues before they go live
- Can catch edge cases that may not have been tested in step 3.

Once a pull request is approved, the feature branch gets merged into the develop and/or main branch. If the feature was merged directly into the production branch (i.e. main), then the next step is step 5.