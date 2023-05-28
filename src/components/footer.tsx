import Image from 'next/image'
import triangle2 from '../../public/triangle2.svg'

export default function Footer() {
  return (
    <div className="relative w-full bg-mainbg">
      <Image
        src={triangle2}
        alt="triangle2"
        className="absolute top-0 w-full "
      />
    </div>
  )
}
