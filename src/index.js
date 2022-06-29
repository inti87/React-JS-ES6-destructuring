//import animals, { useAnimals } from "./data";

//const [cat, dog] = animals;
//console.log(cat);
//console.log(dog);

//const { name: catName, sound: catSound } = cat;
//console.log(catName);
//console.log(catSound);

//const {name = "Fluffy", sound = "Purr"} = cat;
//console.log(name)

//const { feedingRequirements: {food, water} } = cat;

//console.log(food);

//const [animal, makeSound] = useAnimals(cat);

//console.log(animal);
//makeSound(cat);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
