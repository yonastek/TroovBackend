//@desc Get all objects
//@route GET /api/v1/objects
//@access  Public
exports.getObjects = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "show all objects",
  });
};

// @desc      Get single object
// @route     GET /api/v1/objects/:id
// @access    Public
exports.getObject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `get single object ${req.params.id}` });
};

// @desc      Create new object
// @route     POST /api/v1/objects
// @access    Private
exports.createObject = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create an object" });
};

//@desc update object
//@route GET /api/v1/objects/:id
//@access private
exports.updateObject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update object ${req.params.id}` });
};

//@desc delete objects
//@route GET /api/v1/objects/:id
//@access public
exports.deleteObject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete object ${req.params.id}` });
};
