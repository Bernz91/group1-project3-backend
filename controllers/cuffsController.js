const BaseController = require("./baseController");

class CuffsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Insert cuff
  async insertOne(req, res) {
    const { cuff_name, additional_cost, image_one } = req.body;
    console.log(req.body);
    try {
      const newCuff = await this.model.create({
        collar_name: cuff_name,
        additional_cost: additional_cost,
        image_one: image_one,
      });
      return res.json(newCuff);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific cuff
  async getOne(req, res) {
    const { cuffID } = req.params;
    try {
      const cuff = await this.model.findByPk(cuffID);
      return res.json(cuff);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  
  // Edit specific collar
  async editCuff(req, res) {
    const { cuffId } = req.params;
    try {
      const cuff = await this.model.findByPk(cuffId);
      return res.json(cuff);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CuffsController;
