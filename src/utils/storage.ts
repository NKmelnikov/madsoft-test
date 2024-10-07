export const saveToSessionStorage = (key: string, data: any) => {
  try {
    const serializedData = JSON.stringify(data);
    sessionStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Ошибка сохранения в sessionStorage", error);
  }
};

export const loadFromSessionStorage = <T>(key: string): T | null => {
  try {
    const serializedData = sessionStorage.getItem(key);
    if (serializedData === null) return null;
    return JSON.parse(serializedData) as T;
  } catch (error) {
    console.error("Ошибка загрузки из sessionStorage", error);
    return null;
  }
};

export const clearSessionStorage = (key: string) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error("Ошибка очистки sessionStorage", error);
  }
};
