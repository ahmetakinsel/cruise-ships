/*globals describe it expect*/
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/Itinerary');

describe('tests',() => {


});

beforeEach(() => {
    let Dover;
    let Calais;
    let ship;
    let itinerary;

});

describe('Ship',() => {
    it('can be instantiated',() => {        
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        
        expect(ship).toBeInstanceOf(Object);
    });
});
    it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
    });
describe('set sail method', () => {
    it('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).toContain(ship);
      });
});

describe('dock method', () => {
    it('can dock at a different port',()=>{
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover,calais])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });
});

describe('ship cant sail without itinerary', () => {
    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});
    it('gets added to port on instantiation', () => {

    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
  
    expect(dover.ships).toContain(ship);
  });