import Link from "next/link";

import Post from "@/types/post";
//shadcn
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  // TableCaption,
} from "@/components/ui/table";

interface PostsTableProps {
  limit?: number;
  title?: string;
  page?: string;
}

const getPosts = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/posts"
  );
  return res.json();
};

const PostsTable = async ({ limit, title }: PostsTableProps) => {
  const posts = await getPosts();
  // Sort posts in dec order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {title ? title : "پست‌ها"}
      </h3>
      <Table className="overflow-hidden">
        {/* <TableCaption>(لیست پست‌های معاصر)</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">عنوان</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              نویسنده
            </TableHead>
            <TableHead className="hidden md:table-cell text-right">
              تاریخ
            </TableHead>
            <TableHead className="text-right">نمایش</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    ویرایش
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
