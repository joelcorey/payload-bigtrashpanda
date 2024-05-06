import Image from 'next/image'

export default function Logo({ src, alt, width, height }) {
	return <Image src={src} alt={alt} width={width} height={height} />
}
