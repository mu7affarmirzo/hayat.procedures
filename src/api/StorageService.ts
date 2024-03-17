export const StorageService = {
  load,
  save,
  remove,
};

function load(key: string) {
  const str = localStorage.getItem(key);
  return JSON.parse(str as string);
}

function save(key: string, val: any) {
  const str = JSON.stringify(val);
  localStorage.setItem(key, str);
}

function remove(key: string) {
  localStorage.removeItem(key);
}
