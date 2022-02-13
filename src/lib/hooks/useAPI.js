import fetch from "isomorphic-unfetch";
import useSWR from "swr";

const fetcher = function (...args) {
  return fetch(...args).then((r) => r.json());
};

const useAPI = function (url, ...args) {
  return useSWR(url, fetcher, ...args);
};

export default useAPI;
