import { redirect } from "next/navigation";

//shadcn
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PostsPagination = ({ page }: { page: string }) => {
  if (!parseInt(page)) {
    redirect("/posts");
  }
  return (
    <div className="flex justify-start mt-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationNext
              href={`/posts?page=${parseInt(page) + 1}`}
              className="text-right"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{parseInt(page) + 1}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{parseInt(page) + 2}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              href={page === "1" ? "#" : `/posts?page=${parseInt(page) - 1}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PostsPagination;
