'use client'
import React, { useEffect, useState } from 'react'
import { Button, CustomFlowbiteTheme, Modal } from 'flowbite-react'
import Image from 'next/image'
import placeholder from "../assets/Group 13.png"

interface CharacterModalProp {
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    character: CharacterType | null
}

const CharacterModalComponent = ({ openModal, setOpenModal, character }: CharacterModalProp) => {

    const customModal: CustomFlowbiteTheme['modal'] = {
        "root": {
            "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
            "show": {
                "on": "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
                "off": "hidden"
            },
            "sizes": {
                "3xl": "max-w-3xl",
                "4xl": "max-w-4xl",
                "5xl": "max-w-5xl",
            },
        },
        "content": {
            "base": "relative h-full w-full p-4 md:h-auto",
            "inner": "relative flex max-h-[90dvh] flex-col rounded-lg bg-black"
        },
        "body": {
            "base": "flex-1 overflow-auto p-6",
            "popup": "pt-0"
        },
        "header": {
            "base": "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
            "popup": "border-b-0 p-2",
            "title": "text-xl font-medium text-gray-900 dark:text-white",
            "close": {
                "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                "icon": "h-5 w-5"
            }
        },
        "footer": {
            "base": "flex justify-center items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
            "popup": "border-t"
        }
    }

    return (
        <div>
            <Modal theme={customModal} size={'4xl'} dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <div className="grid grid-cols-3 gap-4 justify-center">
                        <div className=' flex justify-center'>
                            {character?.image ? <img src={character?.image} alt="" className='h-[300px] rounded-xl' /> :
                                <Image
                                    src={placeholder}
                                    width={300}
                                    height={300}
                                    alt="Placeholder(No image provided)"
                                    className='rounded-xl'
                                    priority
                                />
                            }
                        </div>
                        <div className='col-span-2'>
                            <div className='grid grid-cols-2 justify-between'>
                                <div>
                                    <h1 className="text-2xl text-white font-bold text-center">
                                        {character?.name}

                                    </h1>
                                </div>

                                <div className=' pl-44'>
                                    <Button className='bg-red-700 !hover:bg-red-800 max-h-12 max-w-32' onClick={() => setOpenModal(false)}>Close</Button>
                                </div>

                            </div>

                            <div className='overflow-y-auto h-[250px] mt-3 text-white paper'>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Alternate Names:</p>
                                    <p className='flex ps-5 col-span-2'>{(character?.alternate_names && character?.alternate_names.length > 0) ? character?.alternate_names.join(", ") : 'N/A'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Species:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.species ? character?.species.charAt(0).toUpperCase() + character?.species.slice(1) : 'Unknown'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Gender:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.gender ? character?.gender.charAt(0).toUpperCase() + character?.gender.slice(1) : 'Unknown'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>House:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.house ? character?.house.charAt(0).toUpperCase() + character?.house.slice(1) : 'N/A'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Birthday:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.dateOfBirth || 'Unknown'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Ancestry:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.ancestry ? character?.ancestry.charAt(0).toUpperCase() + character?.ancestry.slice(1) : 'Unknown'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Eye Color:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.eyeColour ? character?.eyeColour.charAt(0).toUpperCase() + character?.eyeColour.slice(1) : 'Unknown'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Hair Color:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.hairColour ? character?.hairColour.charAt(0).toUpperCase() + character?.hairColour.slice(1) : 'Unknown'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Wand Type:</p>
                                    <p className='flex ps-5 col-span-2'>{(character?.wand.wood && character?.wand.core) ? `${character?.wand.length} inches, ${character?.wand.wood} wood with ${character?.wand.core} ` : 'N/A'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Patronus</p>
                                    <p className='flex ps-5 col-span-2'>{character?.patronus ? character?.patronus.charAt(0).toUpperCase() + character?.patronus.slice(1) : 'N/A'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Hogwart Student?</p>
                                    <p className='flex ps-5 col-span-2'>{character?.hogwartsStudent == true ? 'Yes' : 'No'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Hogwart Staff?</p>
                                    <p className='flex ps-5 col-span-2'>{character?.hogwartsStaff == true ? 'Yes' : 'No'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Actor:</p>
                                    <p className='flex ps-5 col-span-2'>{character?.actor || 'N/A'}</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <p className='flex justify-end font-bold text-sky-600'>Alive?</p>
                                    <p className='flex ps-5 col-span-2'>{character?.alive == true ? 'Yes' : 'No'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CharacterModalComponent