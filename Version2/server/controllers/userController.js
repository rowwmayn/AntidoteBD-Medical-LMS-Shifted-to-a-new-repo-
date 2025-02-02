const userController = {
  getProfile: async (req, res) => {
    try {
      res.json(req.user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProfile: async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'facebookLink'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).json({ error: 'Invalid updates' });
    }

    try {
      updates.forEach(update => req.user[update] = req.body[update]);
      await req.user.save();
      res.json(req.user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = userController;