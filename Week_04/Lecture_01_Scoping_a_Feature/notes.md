# Feature Scope
The scope of a feature involves information about the level of importance of the feature, how long it should take to complete the feature, and any other information that might be needed to organize a series of features into an organized and prioritized list to meet Minimum Viable Product (MVP).

## Scoping Features: Ability to View Orders in KenzieCart

### MVP
  - Users should be able to create an account and log in
  - Logged in shoppers should be able to place orders
  - Logged in shoppers should be able to view past orders

### User Stories
-  As a shopper for the online store, I need to be able to create an account so that I can log back in to view and interact with my account data in the future.
-  As a shopper for the online store, I need to be able to store my shipping address and payment information so that I don't need to enter it every time I purchase something.
-  As a shopper for the online store, I need to be able to view my past orders so that I can re-order products as needed more easily, confirm the order went through, etc.
-  As a customer service agent, I need to see the details of user's past orders, so that I can help them resolve their issues when they call customer service.
-  As a marketing employee, I need to see information about past orders from users, so that I can tailor the advertising algorithm to suggest products based on users past orders.

## Scoped List

### P0 - the core features needed to hit MVP
- Create a user data model.
  - email
  - password
  - orderList
- Create POST signup endpoint
  - Accept: email password confirmPassword
  - Create a user in the database if doesn't exist
  - Return 201 Created
- Create POST signin endpoint
  - Accept: email password
  - Confirm user exists in DB
  - Create JWT and return it with 200 OK
- Create RegisterPage and LoginPage components
  - RegisterPage form: email, password, confirmPassword
  - LoginPage form: email, password
  - Both pages should link to the other if no account/yes account
- Create Auth context and custom hook
  - Methods: signup, signin, signout, isAuthenticated
  - Should store basic data in localstorage and load into state when the app loads
- Modify order placement to save logged in user data
- Create User Profile page
  - Display past orders

### P1 - features that are important to the final vision, but not necessarily needed for MVP
- Modify User Profile page to allow a user to change their default address and payment info
  - Update user schema to have a default address and default payment
- Modify checkout page to default the shipping and payment info to the user's stored info
  - Display saved address and last 4 digits of payment info with option to use a different address and payment info
- On past order, add a button to re-order
  - Don't show the button if the item is out of stock
  - When the button is clicked, place an order for the same products using the logged in user's default saved address and payment info

### P2 - desired features that are not crucial, and can be handle if there is time
- Modifying user schema to use roles
  - Roles should include: shopper, customer service, marketing, admin
- Create GET endpoint for pulling up a specific order
  - Accept: order Id
  - Return order details 200 OK
- Create GET endpoint for pulling up a user's order history
  - Accept: User email
  - Return: array of orders 200 OK
- Create PUT endpoint for updating an order
  - Accept: order Id
  - Return: updated order 200 OK 
- Create a customer service dashboard
  - Enter an order number to pull up order info
  - Enter a user's email to pull up order history
  - Allow ability to modify the order
- Create GET endpoint for pulling up multiple orders in a given time range
  - Accepts: startMonth, endMonth
  - Return: sorted list of orders chronologically 200 OK
- Create marketing dashboard
  - Select a date range and view most common orders
  - Filter by product to see most common time window
