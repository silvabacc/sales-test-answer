import { sequelize } from '../db/db.js';

class SalesController {
  async getSales() {
    // HOWTO run a raw query
    console.log('here');
    const [result] = await sequelize.query('Select * from total_sales');
    console.log(result);
  }
}

export default SalesController;
