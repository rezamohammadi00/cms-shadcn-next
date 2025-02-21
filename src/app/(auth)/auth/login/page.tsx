import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <main className="min-h-screen w-full flex flex-col justify-center items-center md:gap-4 gap-2">
        <h1 className="font-bold text-2xl border-b-2">ورود</h1>
        <LoginForm />
      </main>
    </Container>
  );
};

export default LoginPage;
