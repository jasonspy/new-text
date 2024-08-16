import React from "react";
import "/src/components/Modal/modal.css";
import { BTN } from "../Button";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "../../assets/icons/index";
interface modalProps {
  showHeader?: boolean;
  children?: any;
  closeModal: (e: React.MouseEvent<HTMLElement>) => void;
  onConfirm: (e: React.MouseEvent<HTMLElement>) => void;
  showCloseIcon?: boolean;
  showfooter?: boolean;
  showCloseButton?: boolean;
  closeButtonLabel?: string;
  closeButtonClassName?: string;
  showConfirmButton?: boolean;
  confirmButtonLabel?: string;
  confirmButtonClassName?: string;
  headerClassName?: string;
  isConfirmButtonDisabled?: boolean;
  loading?: boolean;
  modalWidth?: string;
}

const Modal = ({
  showHeader,
  children,
  closeModal,
  onConfirm,
  showCloseIcon,
  showfooter,
  showCloseButton,
  closeButtonLabel,
  closeButtonClassName,
  showConfirmButton,
  confirmButtonLabel,
  confirmButtonClassName,
  headerClassName,
  loading,
  modalWidth,
  isConfirmButtonDisabled,
}: modalProps) => {
  const { t } = useTranslation(["translation"]);

  const findByKey = (name: string) =>
    children.map((child: { key: any }) => {
      if (child.key === name) return child;
    });

  const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    return closeModal(e);
  };

  return (
    <div className="modal-mask modal-close">
      <div className="modal-wrapper">
        <div
          className="modal-container"
          style={{ maxWidth: modalWidth ? modalWidth : "512px", minWidth: modalWidth ? modalWidth : "512px" }}
        >
          {showCloseIcon && (
            <button onClick={onCloseModal} className="close-button">

              <CloseIcon />
            </button>
          )}

          {showHeader && (
            <div className={`modal-header ${headerClassName ? headerClassName : ''}`}>{findByKey("header")}</div>
          )}

          <div className="modal-body">{findByKey("body")}</div>

          {showfooter && (
            <div className="modal-footer">
              {showCloseButton && (
                <BTN
                  text={closeButtonLabel ? closeButtonLabel : "Cancel"}
                  className={closeButtonClassName ? closeButtonClassName : ""}
                  onClick={onCloseModal}
                />
              )}

              {showConfirmButton && (
                <BTN
                  text={confirmButtonLabel ? confirmButtonLabel : "Confirm"}
                  className={
                    confirmButtonClassName ? confirmButtonClassName : ""
                  }
                  onClick={onConfirm}
                  loading={loading}
                  disabled={isConfirmButtonDisabled}
                />
              )}
              {findByKey("footer")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
