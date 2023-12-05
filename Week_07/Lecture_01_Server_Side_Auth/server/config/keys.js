export default {
  port: process.env.PORT || 3001,
  db_uri:
    process.env.DB_URI ||
    "mongodb+srv://someperson:somepassword@cluster0.y6yq3tk.mongodb.net/auth-demo-db?retryWrites=true&w=majority",
  api_url: process.env.API_URL || "/api",
  jwt_secret: process.env.JWT_SECRET || "peterpiperpickedapeckofpickledpeppers",
  jwt_ttl: "7d",
};
