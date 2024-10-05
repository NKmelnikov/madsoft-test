import { FC } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

type Props = {
  active?: boolean;
  completed?: boolean;
};

export const ProgressCell: FC<Props> = ({ active, completed }) => {
  return (
    <div
      className={classNames(styles["container"], {
        [styles["active"]]: active,
        [styles["completed"]]: completed,
      })}
    ></div>
  );
};
