const Mess = require("../models/Mess");

exports.getMesses = async (req, res) => {
  const messes = await Mess.find();
  res.json(messes);
};

exports.createMess = async (req, res) => {
  const mess = await Mess.create(req.body);
  res.json(mess);
};

exports.deleteMess = async (req, res) => {
  await Mess.findByIdAndDelete(req.params.id);
  res.json({ message: "Mess deleted" });
};
