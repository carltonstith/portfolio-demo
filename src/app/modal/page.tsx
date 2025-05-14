"use client";
import { useRef } from "react";

// declare global {
//   interface Window {
//     my_modal_2: HTMLFormElement;
//   }
// }

// type Props = {
//   onClose?: () => void;
//   onOpen?: () => void;
//   isOpen?: boolean;
//   children: React.ReactNode;
//   title?: string;
//   description?: string;
//   className?: string;
//   closeButton?: boolean;
//   backdropClose?: boolean;
//   escClose?: boolean;
//   modalRef?: React.RefObject<HTMLDialogElement>;
//   onBackdropClick?: () => void;
//   onEscPress?: () => void;
// };

export default function Modal(isVisible) {
  if (!isVisible) return null;
  // const modalRef = useRef(null);

  // function openModal() {
  //   console.log(modalRef.current);
  //   const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
  //   if (modal) {
  //     modal.showModal();
  //   }
  // }
  return (
    <>
{/* Open the modal using document.getElementById('ID').showModal() method */}
    <div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end">X</button>
        <div className="bg-white p-2 rounded">Modal</div>
      </div>
    </div>

      {/* <button className="btn" ref={modalRef} onClick={openModal}>
        open modal
      </button>

      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> */}
    </>
  );
}
