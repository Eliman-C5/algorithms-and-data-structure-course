/*
 * Dado un array de números enteros y un target, retorna los índices de dos
 * números para los que la suma de ambos sea igual al target.
 *
 * Puedes asumir que hay solamente una solución.
 *
 * Ejemplo 1:
 *  Input: nums = [9,2,5,6], target = 7
 *  Output: [1,2]
 *  Explicación: nums[1] + nums[2] == 7, devolvemos [1, 2].
 *
 * Ejemplo 2:
 *  Input: nums = [9,2,5,6], target = 100
 *  Output: null
 */

export const twoSum = (nums: number[], target: number): number[] | null => {
  const hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashTable.has(complement)) {
      return [hashTable.get(complement), i];
    }
    hashTable.set(nums[i], i);
  }
  return null;
};
