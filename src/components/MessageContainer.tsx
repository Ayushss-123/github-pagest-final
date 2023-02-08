import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MessageContainer.module.css";

type MessageContainerType = {
  userId1?: string;

  /** Style props */
  propLeft?: Property.Left;
};

const MessageContainer: FunctionComponent<MessageContainerType> = ({
  userId1,
  propLeft,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.messageMeHereParent} style={frameDivStyle}>
      <div className={styles.messageMeHere}>Message me here</div>
      <div className={styles.instanceParent}>
        <div className={styles.discordParent}>
          <img className={styles.discordIcon} alt="" src="../discord.svg" />
          <div className={styles.elias}>{userId1}</div>
        </div>
        <div className={styles.discordParent}>
          <img className={styles.discordIcon} alt="" src="../email.svg" />
          <div className={styles.elias}>elias@elias.me</div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
