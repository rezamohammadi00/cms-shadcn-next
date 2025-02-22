import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import UsersTable from "@/components/UsersTable";

const PostsPage = async () => {
  return (
    <main className="w-full p-5">
      <Container>
        <BackButton link="/" text="داشبورد" />
        <UsersTable />
      </Container>
    </main>
  );
};

export default PostsPage;
