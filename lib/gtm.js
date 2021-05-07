import { useRouter } from "next/router";
import { useEffect } from "react";

export const { GTM_ID } = process.env;

const pageview = (url) =>
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });

export const useTagManager = () => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  });
};
