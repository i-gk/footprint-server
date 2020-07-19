const Login = (req, res) => {
 res
  .status(200)
  .set("Content-Type", "application/json")
  .send(
   JSON.stringify({ accessToken: "sjdndkhfgwurgeu28327724235r187jdkghvkd" })
  );
};

const Logout = (req, res) => {
  res
   .status(200)
   .set("Content-Type", "application/json")
   .send(
    JSON.stringify({ sucess: "User signed out successfully" })
   );
 };

module.exports = {
  Login,
  Logout
}
