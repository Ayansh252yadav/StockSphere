module.exports.Logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0), // immediately expire the cookie
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};