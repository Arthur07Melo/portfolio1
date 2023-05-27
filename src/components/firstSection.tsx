import arthurIan from '../../public/ARTHUR IAN.svg'
import techs from '../../public/techs.svg'
import Image from 'next/image'

export default function FirstSection() {
  return (
    <div className="flex h-[350px] w-full flex-col items-center justify-center gap-7 p-10">
      <Image
        className="animate-appear4s transition-all"
        src={arthurIan}
        alt="arthur ian"
        priority
      ></Image>
      <Image
        className="animate-appear7s"
        src={techs}
        alt="techs"
        priority
      ></Image>
    </div>
  )
}
