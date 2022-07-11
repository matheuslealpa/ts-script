"use strict";
exports.__esModule = true;
var carros = [
    { id: 1, anoModelo: 2016, name: 'Gol', nacionalidade: { id: 1010, pais: 'Brasil' } },
    { id: 2, anoModelo: 2017, name: 'HB20', nacionalidade: { id: 1010, pais: 'Brasil' } },
    { id: 3, anoModelo: 2008, name: 'Celta', nacionalidade: { id: 1010, pais: 'Italia' } }
];
var findCarByNacionalidade_Pais = function (carros, pais) {
    var cars = carros.filter(function (carros) { return carros.nacionalidade.pais == pais; });
    if (cars.length == 0)
        return console.log('pais não encontrado');
    else
        return cars.forEach(function (carros) { return console.log("".concat(carros.nacionalidade.pais, " ").concat(carros.name)); });
};
findCarByNacionalidade_Pais(carros, 'Brasil');
