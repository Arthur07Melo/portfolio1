import Image from 'next/image'
import profilePhoto from '../../public/profile-photo.png'
import triangle from '../../public/triangle.svg'

export default function SecondSection() {
  return (
    <div id="about" className="flex w-full flex-wrap justify-center gap-24">
      <Image
        className="p-5"
        src={profilePhoto}
        alt="profile-photo"
        width={430}
      ></Image>
      <div className="flex animate-slide1s flex-col gap-4 p-3 md:w-1/2">
        <h1 className="text-[43px] font-semibold">PROFILE</h1>
        <p className="text-[20px]">
          Entusiasta apaixonado por tecnologia e sempre buscando melhorar.
          Atualmente estudando desenvolvimento web tanto back-end quanto
          front-end. Atualmente cursando Ciências da Computação na UEPB
          (Universidade estadual da Paraíba).
        </p>
      </div>
      <Image className="w-full" src={triangle} alt="triangle" />
    </div>
  )
}
