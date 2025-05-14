import classNames from "classnames"
import { useEffect, useRef } from "react"
import { ModalOptions } from "./modal.context"
import styles from "./modal.styles.module.css"

export function Modal(props: {
  isOpened: boolean
  close: () => void
  options: ModalOptions
  style?: React.CSSProperties
}) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const modalRef = useRef<HTMLDivElement>(null)

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    // Disable scrolling when the modal is open
    if (props.isOpened) {
      document.body.style.overflow = "hidden"
    } else {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto"
    }

    return () => {
      // Ensure that scrolling is enabled when the component unmounts
      document.body.style.overflow = "auto"
    }
  }, [props.isOpened])

  useEffect(() => {
    if (!props.isOpened) return
    if (!props.options.closeOnEsc) return

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.close()
      }
    }
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [props.isOpened, props.options.closeOnEsc])

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function onOverlayClick(event: any) {
    if (!props.options.closeOnOutsideClick) return

    if (event.target?.id === "modal-overlay") {
      props.close()
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <div
      id="modal-overlay"
      className={classNames({
        [styles.overlay]: true,
        [styles.opened]: props.isOpened,
        [styles.closed]: !props.isOpened,
        [props.options.overlayClassName ?? ""]: true,
      })}
      style={props.style}
      onClick={(event) => onOverlayClick(event)}
    >
      <div
        ref={modalRef}
        className={classNames(styles.modal, props.options.modalClassName ?? "")}
        style={{ width: props.options.width || "30em" }}
      >
        {props.options.hideCloseBtn !== true && (
          <div className={styles.topWrapper}>
            <span className={styles.modalTitle}>
              {props.options.modalTitle}
            </span>
            <div
              className={classNames(
                styles.crossBtn,
                props.options.closeIconClassName,
              )}
              onClick={() => props.close()}
            >
              <i className={classNames(["fas fa-xmark", styles.crossIcon])}></i>
            </div>
          </div>
        )}
        <div className={classNames(props.options.containerClassName ?? "")}>
          {props.options.component}
        </div>
      </div>
    </div>
  )
}
