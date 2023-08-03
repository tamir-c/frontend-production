import { getProviders } from "next-auth/react";

export const fetchProviders = async () => {
  const allProviders = await getProviders();
  return allProviders;
};
