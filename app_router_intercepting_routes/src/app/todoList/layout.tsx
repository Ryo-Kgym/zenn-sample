import { ReactNode } from "react";

const Layout = ({
  list,
  modal,
}: {
  list: ReactNode; // @list を埋め込む
  modal: ReactNode; // @modal を埋め込む
}) => (
  <div className={"space-y-5"}>
    <div className={"text-3xl"}>ToDo リスト</div>
    <div>{list}</div>
    {modal}
  </div>
);

export default Layout;
