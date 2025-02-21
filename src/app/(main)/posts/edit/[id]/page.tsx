import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import PostEditForm from "@/components/PostEditForm";
import Post from "@/types/post";

type PostEditPageProps = {
  params: {
    id: string;
  };
};

const getPosts = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/posts"
  );
  return res.json();
};

const PostEditPage = async ({ params }: PostEditPageProps) => {
  const posts = await getPosts();
  const id = (await params).id;
  const post: Post = posts.find((post: Post) => post.id === id);

  return (
    <main className="w-full p-5">
      <Container>
        <BackButton text="پست‌ها" link="/posts" />
        <h3 className="text-2xl mb-4">ویرایش پست</h3>
        <PostEditForm {...post} />
      </Container>
    </main>
  );
};

export default PostEditPage;
