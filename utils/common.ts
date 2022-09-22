/**
 * Remove duplicate values in array
 *
 * @param {Array} z array to unduplicate
 *
 * @return a new array without duplicate values
 */
export const foo = <I>(z: I[]) => [...new Set(z)];

/**
 * Get value in object
 *
 * @param {Object} a key to find
 * @param {Array<string>} b object where to find value from key
 *
 * @return value of Key in object
 */
export const bar = <O, K extends keyof O>(a: O, ...b: K[]) =>
  Object.fromEntries(b.map((c) => [c, a[c]])) as Pick<O, K>;

/**
 * Get value in object
 *
 * @param {string | number} a key to find
 * @param {Object} b object where to find value from key
 *
 * @return value of Key in object
 */
export const boo = <
  K extends string | number,
  O extends { [Key in K]: unknown }
>(
  a: K,
  b: O
): O[K] => b[a];

/**
 * Require every properties of type T
 */
export type Azerty<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Exclude keys of type
 */
export type Ytreza<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * AttributeLike define attribute as Attribute with key 'type' and K keys
 */
export type AttributeLike<K extends keyof Attribute = never> = {
  attribute: Pick<Attribute, 'type' | K>;
};
type Attribute = {
  id: string;
  type: 'foo' | 'bar';
  toto: number;
};
