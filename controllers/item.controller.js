const Item = require('../models/item.model');

exports.createItem = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const item = await Item.create({
      name,
      description,
      price,
      stock,
      userId: req.user.id, 
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create item', error });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll({ where: { userId: req.user.id } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch items', error });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await item.update({ name, description, price, stock });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update item', error });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await item.destroy();
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete item', error });
  }
};
