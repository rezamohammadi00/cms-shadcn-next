import ThemeToggler from "@/components/ThemeToggler";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="absolute bottom-4 right-4 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
}
