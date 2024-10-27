const { DataItem } = require('../models/data.model');

exports.getAllData = async (req, res) => {
  const data = await DataItem.findAll();
  res.json(data);
};

exports.createData = async (req, res) => {
  const data = await DataItem.create(req.body);
  res.json(data);
};

exports.updateData = async (req, res) => {
  await DataItem.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
};

exports.deleteData = async (req, res) => {
  await DataItem.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};
