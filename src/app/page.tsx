'use client'
import { getAllCharacters } from "@/app/utils/DataServices";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import hpImage from "./assets/HarryPotter.png"
import placeholder from "./assets/Group 13.png"
import CharacterModalComponent from "./components/CharacterModalComponent";
export default function Home() {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const charactersPerPage = 8;

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters?.slice(indexOfFirstCharacter, indexOfLastCharacter);
  const totalPages = characters.length > 0 ? Math.ceil(characters.length / charactersPerPage) : 1;
  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const charactersData = async () => {
      const data = await getAllCharacters();
      setCharacters(data);
    }
    charactersData();
  }, [])

  const openCharacterInfo = (character: CharacterType) => {
    setSelectedCharacter(character)
    setOpenModal(true);
  }


  return (
    <div className="Tennis">

<div className=" px-5">

    <Image
  className="hover:cursor-pointer"
  src={hpImage}
  alt="The Harry Potter Logo"
  width={300}
  height={200}
  onClick={() => setCurrentPage(1)}
  />
  
</div>

      <div className="grid grid-cols-4 pb-5">
        {characters.slice((currentPage - 1) * charactersPerPage, currentPage * charactersPerPage).map((character, idx) => (
          <div key={idx} className=" flex justify-center hover:cursor-pointer pb-5" onClick={() => openCharacterInfo(character)}>
            <div className="flex flex-col rounded-xl items-center">
              <div className="h-[230px] w-[180px] flex justify-center">
                {character?.image ? <img src={character?.image} alt="" className='object-cover rounded-xl shadow-xl' /> :
                  <Image
                    src={placeholder}
                    width={250}
                    height={250}
                    alt="Placeholder (No image provided)"
                    className='rounded-xl shadow-xl'
                    priority
                  />
                }
              </div>
              <p className=" text-center text-2xl text-white font-bold text-wrap">{character.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pb-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>

      <CharacterModalComponent openModal={openModal} setOpenModal={setOpenModal} character={selectedCharacter} />
    </div>
  );
}