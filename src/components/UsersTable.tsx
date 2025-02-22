import Link from "next/link";
import User from "@/types/user"; // Corrected type import
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const getUsers = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`
  );
  return res.json();
};

const UsersTable = async () => {
  const users: User[] = await getUsers();

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">کاربران</h3>
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">شناسه</TableHead>
            <TableHead className="text-right">نام کاربری</TableHead>
            <TableHead className="text-right hidden md:table-cell">
              نقش
            </TableHead>
            <TableHead className="text-right">ویرایش</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell className="hidden md:table-cell">
                {user.role}
              </TableCell>
              <TableCell>
                <Link href={`/users/edit/${user.id}`}>
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

export default UsersTable;
