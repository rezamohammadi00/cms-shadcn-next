import Link from "next/link";

//shadcn
import {
  LayoutDashboard,
  Newspaper,
  Users,
  // CreditCard,
  Settings,
  User,
} from "lucide-react";
import {
  Command,
  // CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Sidebar = () => {
  return (
    <aside className="w-72  hidden md:block  ">
      {/* min-h-screen */}
      {/* h-screen  */}
      <Command className="bg-secondary rounded-none ">
        <CommandInput
          placeholder=" صفحه مورد نظر خورد را وارد کنید"
          className="md:text-[11.5px]"
        />
        <CommandList className="min-h-screen">
          <CommandEmpty>صفحه مورنظر شما پیدا نشد.</CommandEmpty>
          <CommandGroup heading="صحفات پیشنهادی">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/">داشبورد</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <Link href="/posts">پست‌ها</Link>
            </CommandItem>
            <CommandItem>
              <Users className="mr-2 h-4 w-4" />
              <Link href="/users">کاربران</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="تنظیمات">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>پروفایل</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            {/* <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>صورت حساب</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem> */}
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>تنظیمات</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </aside>
  );
};

export default Sidebar;
