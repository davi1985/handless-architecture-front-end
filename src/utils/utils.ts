export function paramsToString(storage?: string, manufacturer?: string) {
  let params = {};

  if (storage) {
    params = { ...params, storage };
  }

  if (manufacturer) {
    params = { ...params, manufacturer };
  }

  return params;
}
