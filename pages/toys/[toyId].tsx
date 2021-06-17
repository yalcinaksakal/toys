// import styles from "./MenuItem.module.scss";

import { useRouter } from "next/dist/client/router";

const MenuItem: React.FC = () => {
  const toyId = useRouter().query.toyId;
  console.log(toyId);
  return <section>{toyId}</section>;
};

export default MenuItem;
