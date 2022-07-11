import {Car} from "./domain/car";

const carros: Car[] = [
    {id: 1, anoModelo: 2016, name: 'Gol', nacionalidade:{id:1010, pais: 'Brasil'}},
    {id: 2, anoModelo: 2017, name: 'HB20', nacionalidade:{id:1010, pais: 'Brasil'}},
    {id: 3, anoModelo: 2008, name: 'Celta', nacionalidade:{id:1010, pais: 'Italia'}}
]

const findCarByNacionalidade_Pais = (carros: Car[], pais: string) =>{
    const cars = carros.filter(carros => carros.nacionalidade.pais == pais)
    if (cars.length ==0) return console.log('pais não encontrado');
    else  return cars.forEach(carros => console.log(`${carros.nacionalidade.pais} ${carros.name}`));
}

findCarByNacionalidade_Pais(carros, 'Brasil');
