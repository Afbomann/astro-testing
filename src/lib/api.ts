import type { TComments, TPost, TPosts } from "./types";

const baseURL = "https://jsonplaceholder.typicode.com";

export async function usePosts(): Promise<TPosts | null> {
  try {
    const response = await fetch(baseURL + "/posts");
    const json = (await response.json()) as TPosts;

    if (response.status == 200) {
      return json;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

export async function usePost(id: string): Promise<TPost | null> {
  try {
    const response = await fetch(baseURL + `/posts/${id}`);
    const json = (await response.json()) as TPost;

    if (response.status == 200) {
      return json;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

export async function useComments(id: string): Promise<TComments | null> {
  try {
    const response = await fetch(baseURL + `/posts/${id}/comments`);
    const json = (await response.json()) as TComments;

    if (response.status == 200) {
      return json;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
