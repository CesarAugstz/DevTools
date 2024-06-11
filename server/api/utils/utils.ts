/**
 * @description: Convert a promise to a promise that returns an array with the data and the error
 * @param {Promise<T>} promise
 * @return {Promise<(T | null)[] | [null, any]>}
 * @example
 * const [data, error] = await $p(parseForm(event));
 */
export const $p = async function promiseHandler<T>(
  promise: Promise<T>
): Promise<(T | null)[] | [null, any]> {
  return await promise.then(data => [data, null]).catch(err => [null, err]);
};
