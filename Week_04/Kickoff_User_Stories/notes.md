# User Stories
User stories are short blurb phrases that are used to outline the basic needs of a feature in terms of three major components:
- The user impacted by the features
- A description of the needed feature
- The business value provided by the feature
- Acceptance criteria

User stores use natural-language descriptions, and they force stakeholders to explain *why* a feature is needed. This helps force stakeholders to evaluate whether a feature may or may not actually be needed. It also can reveal additional requirements not originally though of, and can help boil a feature down to the actual needed parts to develop.

## Format of a User Story
Generally, user stories follow a standard pattern as such:
>> As a *type of user*, I need/want *description of the need*, so that *business value*

## Example: "Add user accounts"

**Why do you want them to have accounts?** So they don't have to enter their shipping and payment info every single time they place an order, and they can possibly also view their purchase history.

**Why do you want them to see their purchase history?** So that the user can potentially re-order a product they've purchased in the past with a single click.

**Resulting User Stories**
- As a **shopper for the online store**, I need **to be able to create an account** so that **I can log back in to view and interact with my account data in the future**.
  - Acceptance Criteria:
    - Email address
    - Password
    - Orders Placed
- As a **shopper for the online store**, I need **to be able to store my shipping address and payment information** so that **I don't need to enter it every time I purchase something**.
  - Acceptance Criteria:
    - One address per shopper
    - Address should support apartments, PO boxes, military addresses, and non US countries
- As a **shopper for the online store**, I need **to be able to view my past orders** so that **I can re-order products as needed more easily, confirm the order went through, etc.**.
  - Acceptance Criteria:
    - A re-order button should place a new order for the product using the payment info and address stored in the user's account
    - The order should not be placed if the product is out of stock.
    - The shopper should be able to see if the product is out of stock
- As a **customer service agent**, I need **to see the details of user's past orders**, so that **I can help them resolve their issues when they call customer service**.
  - Acceptance Criteria:
    - The details should not include the full payment info (just last 4 digits)
    - The details should include the date the order was placed
    - The details should include a button that a customer service agent can press to refund the user
- As a **marketing employee**, I need **to see information about past orders from users**, so that **I can tailor make the advertising algorithm to suggest products based on users past orders**.
  - Acceptance Criteria:
    - The marketing side should not be able to see individual orders, but rather some form of data visualization of trends, windows of time, etc.