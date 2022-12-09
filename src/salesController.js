import { sequelize } from '../db/db.js';

class SalesController {
  async getSales() {
    // HOWTO run a raw query
    const [result] = await sequelize.query('select * from total_sales');
    console.log(result);
  }
}

export default SalesController;
