import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li className="border-b pb-2" key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a className="block text-sm hover:text-blue-400">
                {comment.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
