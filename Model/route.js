const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  sourceRoute: {
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number,
  },
  destinationRoute: {
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number,
  },
  currentRouteLocation: {
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number,
  },
});

module.exports = mongoose.model('Route', routeSchema);
