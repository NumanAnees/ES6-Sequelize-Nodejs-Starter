import { User } from "models";

const getAll = async (req, res) => {
  const Data = await User.findAll({
    where: {
      id: 1,
    },
  });
  res.status(200).json({ msg: "getAll Working Fine", data: Data });
};

const create = async (req, res) => {
  res.status(200).json({ msg: "create Working Fine" });
};

module.exports = {
  getAll,
  create,
};
