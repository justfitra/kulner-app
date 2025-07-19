import { useCallback, useEffect, useState } from "react";

type UseHashReturn = [string, (newHash: string) => void];

/**
 * Hook to read and write the hash of the current url. It also updates the hash when the url changes.
 * @returns {UseHashReturn} An array of two elements:
 * 1. The current hash of the url.
 * 2. A function to set the hash of the url.
 */
const useHash = (): UseHashReturn => {
  const [hash, setHash] = useState("");

  // Initialize hash on mount
  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [onHashChange]);

  const updateHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash]
  );

  return [hash, updateHash];
};

export default useHash;
