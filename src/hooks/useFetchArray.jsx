import useSWRImmutable from "swr/immutable";

const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
const API_URL = "https://jsonplaceholder.typicode.com";

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};
export const usePostsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};
export const useUsers = () => {
  return useFetchArray(`${API_URL}/Users`);
};
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};
export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
