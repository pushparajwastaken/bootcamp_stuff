function authMiddleware(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    res.status(403).send({
      message: "You are not loggged in",
    });
    return;
  }

  const decoded = jwt.verify(token, "lavanyanaglejdskjdsjdasdfojisfjoisojif");
  const userId = decoded.userId;

  if (userId) {
    req.userId = userId;

    next();
  } else {
    res.status(403).json({
      message: "Token is invalid",
    });
  }
}

module.exports = {
  authMiddleware,
};
