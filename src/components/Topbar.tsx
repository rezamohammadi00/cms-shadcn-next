import Container from "@/components/Container";
import ThemeToggler from "@/components/ThemeToggler";
import LogOutButton from "@/components/LogOutButton";
//Shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Topbar = () => {
  return (
    <header className="">
      <Container>
        <div className=" flex justify-between px-5 py-2 dark:bg-slate-700 text-white bg-primary">
          <div className="flex justify-center items-center">
            <span className="font-bold text-2xl">داشبورد</span>
          </div>
          <div className="flex items-center md:gap-5 gap-4">
            <ThemeToggler />
            {/* Avatar menu*/}
            <DropdownMenu>
              {/* avatar*/}
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-black">RN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              {/* menu */}
              <DropdownMenuContent>
                <DropdownMenuLabel className="w-full text-center">
                  حساب شما
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="text-right w-full">پروفایل</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-red-800 text-right w-full">
                    <LogOutButton />
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Topbar;
