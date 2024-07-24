import { useCallback, useEffect, useState } from "react";

export const getStorageValue = <T>(key: string, defaultValue?: T): T | undefined => {
  if (typeof window !== "undefined")
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved) as T;
    } catch (err) {
      localStorage.removeItem(key);
    }

  return defaultValue;
};

export const setStorageValue = <T>(key: string, value: T | undefined): void => {
  const oldValue = localStorage.getItem(key);
  const newValue = value === undefined ? undefined : JSON.stringify(value);

  if (newValue === undefined) localStorage.removeItem(key);
  else localStorage.setItem(key, newValue);

  const storageArea = localStorage;
  const url = location.href;
  const evt = new StorageEvent("storage", { key, newValue, oldValue, storageArea, url });
  window.dispatchEvent(evt);
};

const useLocalStorage = <T>(
  key: string,
  defaultValue?: T,
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [value, setValue] = useState<T | undefined>(getStorageValue(key, defaultValue));

  const setValueState = useCallback<typeof setValue>(
    (valOrFunc) => {
      setValue((prev) => {
        const newVal = valOrFunc instanceof Function ? valOrFunc(prev) : valOrFunc;
        setStorageValue(key, newVal);
        return newVal;
      });
    },
    [key],
  );

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent): void => {
      if (e.key === key) {
        setValue(getStorageValue(key, defaultValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, defaultValue, setValue]);

  return [value, setValueState];
};

export { useLocalStorage };
