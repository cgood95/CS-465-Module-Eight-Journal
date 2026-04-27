const fs = require('fs');
const Trip = require('../models/trips');
require('../models/db');

const data = JSON.parse(fs.readFileSync('./app_api/data/trips.json', 'utf-8'));

async function seedDB() {
  await Trip.deleteMany({});
  await Trip.insertMany(data);
  console.log('Database seeded');
  process.exit();
}

seedDB();