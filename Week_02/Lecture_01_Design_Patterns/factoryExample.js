class Transport {
  constructor(type, cargoCapacity, route) {
    this.type = type;
    this.cargoCapacity = cargoCapacity;
    this.route = route;
  }

  planDelivery() {
    console.log("do something");
  }

  static createTransport(type, cargoCapacity, route) {
    return new Transport(type, cargoCapacity, route);
  }
}

class Truck extends Transport {
  constructor(cargoCapacity, route) {
    super("truck", cargoCapacity, route);
  }
  static createTransport(cargoCapacity, route) {
    return new Truck(cargoCapacity, route);
  }
}

class Boat extends Transport {
  constructor(cargoCapacity, route) {
    super("boat", cargoCapacity, route);
  }
  static createTransport(cargoCapacity, route) {
    return new Boat(cargoCapacity, route);
  }
}

const newTruck = Transport.createBoat(2, "route 66");
