'use client'
import { Modal, Button } from "flowbite-react";
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const callAPI = async () => {
    const promise = await fetch('https://potterhead-api.vercel.app/api/characters');
    const data = await promise.json();
    return data;
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <Button onClick={() => setOpenModal(true)}>Character</Button>
        <Modal className="bg-slate-300" size="xl" popup onClose={() => setOpenModal(false)} show={openModal}>
          <Modal.Header>
            <Modal.Body>
              <p>This is this dude</p>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    </main>
  );
}
