import { FunctionComponent } from "react";
import WebDesigner from "../components/WebDesigner";
import FrontEndDeveloper from "../components/FrontEndDeveloper";
import Button from "../components/Button";
import ImageRemovebgPreview2Icon from "../components/ImageRemovebgPreview2Icon";
import styles from "./ContainerElias.module.css";

const ContainerElias: FunctionComponent = () => {
  return (
    <div className={styles.first}>
      <div className={styles.eliasIsAWebDesignerAndFrParent}>
        <div className={styles.eliasIsAContainer}>
          <span>{`Elias is a `}</span>
          <WebDesigner />
          <span>{` and `}</span>
          <FrontEndDeveloper />
        </div>
        <div className={styles.heCraftsResponsive}>
          He crafts responsive websites where technologies meet creativity
        </div>
        <Button />
      </div>
      <div className={styles.logoParent}>
        <img className={styles.logoIcon} alt="" src="../logo1.svg" />
        <ImageRemovebgPreview2Icon />
        <div className={styles.dots}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-233.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.currentlyWorkingOnContainer}>
          <span
            className={styles.currentlyWorkingOn}
          >{`Currently working on `}</span>
          <span className={styles.portfolio}>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default ContainerElias;
