"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect, JSX } from "react";

type Props = {
  title: string,
  onClose: () => void,
  onOk: () => void,
  children: React.ReactNode,
}

export default function Modal({ title, onClose, onOk, children }: Props) {

  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get("showModal");

  useEffect(() => {
    if (showModal === "y") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  const closeModal = () => {
    modalRef.current?.close();
    onClose();
  }

  const clickOk = () => {
   onOk();
   closeModal();
  }

  const modal: JSX.Element | null = showModal === "y" ? (
    <dialog ref={modalRef}>
      <div>
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <button 
            onClick={closeModal}
          >X</button>
        </div>
        <div>
          {children}
          <div>
            <button onClick={clickOk}>OK</button>
          </div>
        </div>
      </div>
    </dialog>
  ) : null;

  return modal;
}