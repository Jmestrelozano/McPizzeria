import { Pizza } from './pizzaJson';

export const getPizzaDetail = (namePizza) => {
  const obtenerPizza = Pizza.response.stores.filter((pizzeta) => pizzeta.name === namePizza);

  return obtenerPizza;
};
