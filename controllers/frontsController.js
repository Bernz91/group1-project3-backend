const BaseController = require("./baseController");

class FrontsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert front
  async insertOne(req, res) {
    const { front_name, additional_cost, image_one } = req.body;
    console.log(req.body);
    try {
      const newFront = await this.model.create({
        front_name: front_name,
        additional_cost: additional_cost,
        image_one: image_one,
      });
      return res.json(newFront);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific front
  async getOne(req, res) {
    const { frontID } = req.params;
    try {
      const front = await this.model.findByPk(frontID);
      return res.json(front);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit specific front
  async editFront(req, res) {
    const { frontId } = req.params;
    try {
      const front = await this.model.findByPk(frontId);
      return res.json(front);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = FrontsController;
