const getAll = async (req, res) => {
  res.status(200).json({ msg: "getAll Working Fine" });
};

const create = async (req, res) => {
  res.status(200).json({ msg: "create Working Fine" });
};

module.exports = {
  getAll,
  create,
};
