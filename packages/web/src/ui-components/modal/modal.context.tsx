import { createContext, JSX } from "react";

export type ModalOptions = {
  component?: JSX.Element;
  width?: string;
  modalTitle?: string;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
  onClose?: () => void;
  hideCloseBtn?: boolean;
  closeIconClassName?: string;
  overlayClassName?: string;
  modalClassName?: string;
  containerClassName?: string;
};

export type ModalContextType = {
  open(options?: ModalOptions): void;
  close(): void;
  setOptions(
    options: ModalOptions | ((prev: ModalOptions) => ModalOptions)
  ): void;
};

export const ModalContext = createContext<ModalContextType>({
  open() {},
  close() {},
  setOptions() {},
});
