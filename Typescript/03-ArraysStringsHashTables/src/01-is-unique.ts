/*
 * Dado un método que recibe una String, comprobar si todos los caracteres son únicos o no.
 *
 * isUnique("abcde") => true;
 * isUnique("abcded") => false;
 */

/* 

* Los Set en Javascript son objetos nativos muy interesantes para representar conjuntos de datos. 
* La característica principal es que los datos insertados no se pueden repetir.
* Con set facilmente pude resolverse este problema, ya que si la longitud del set es igual a la longitud de la cadena, el resultado sera true.
* Si la longitud del set es menor a la longitud de la cadena, significa que hay caracteres repetidos y el resultado sera false.
*/

export const isUnique = (str: string): boolean => {
  const strSet = new Set(str);
  return strSet.size === str.length;
};
