import React from 'react'

const Modal = ({ title, modal, setModal, showclose = true, moreWidth = false, children }) => {
    return (
        <main>
            <dialog id="my_modal_3" className={`modal ${modal && 'modal-open'} w-full`} style={{ width: '100%' }}>
                <div className={`modal-box ${moreWidth ? 'w-11/12 max-w-5xl' : null}`}>
                    {showclose ? (<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModal(false)}>✕</button>) : null}
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="pt-4">{children}</div>
                </div>
            </dialog>
        </main>
    )
}

export default Modal