import * as prismic from "@prismicio/client";

export const repositoryName = "linktree"; // seu subdomínio do Prismic

export function createClient(config?: prismic.ClientConfig) {
  return prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN, // deixe sem valor se seu repo é público
    ...config,
  });
}
