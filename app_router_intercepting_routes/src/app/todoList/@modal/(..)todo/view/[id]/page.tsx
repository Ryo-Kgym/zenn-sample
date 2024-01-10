import { ToDoView } from "@/component/aggregation/todo"; // 中身は割愛しています。
import { BackModal } from "@/component/ui";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <ToDoView id={id} />
  </BackModal>
);

export default Page;
