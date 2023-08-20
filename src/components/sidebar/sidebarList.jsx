import Image from "next/image";


const SidebarList = ({ name, image }) => {
    return (
        <div class="flex items-center gap-3">

            <Image src={image} alt="icon" />
            <h4>{name}</h4>
        </div>
    )
}

export default SidebarList