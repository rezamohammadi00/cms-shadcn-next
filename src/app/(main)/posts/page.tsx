import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import PostsPagination from "@/components/PostsPagination";
import PostsTable from "@/components/PostsTable";

const PostsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const page = (await searchParams).page; //"..." or undefined

  return (
    <main className="w-full p-5">
      <Container>
        <BackButton text="داشبورد" link="/" />
        <PostsTable page={page ? page : "1"} />
        <PostsPagination page={page ? page : "1"} />
      </Container>
    </main>
  );
};

export default PostsPage;
