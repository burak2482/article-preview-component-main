import Image from "next/image";

export default function Button({ isOpened, setOpened }) {
  function handleisOpened() {
    setOpened(!isOpened);
  }

  return (
    !isOpened ? (
      <button onClick={handleisOpened} className="flex items-center justify-center">
        <Image 
          src="/icon-share.svg" 
          alt="Share" 
          width={20} 
          height={20} 
        />
      </button>
    ) : null
  );
}
