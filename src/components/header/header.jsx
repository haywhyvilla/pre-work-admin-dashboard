import Image from "next/image"
import profile from "../../assets/profile.png"

const Header = () => {

    return (
        <section class="h-[15vh] md:flex justify-between items-center bg-white px-12 hidden">
            <h2 class="text-[#313638] font-medium text-3xl">Dashboard</h2>
            <div class="flex items-center justify-center xl:gap-12 gap:9">
                <div class="w-[40vh] relative lg:block hidden ">
                    <svg class="absolute top-3 left-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M10.5423 19.2503C15.3518 19.2503 19.2507 15.3515 19.2507 10.542C19.2507 5.73253 15.3518 1.83368 10.5423 1.83368C5.73284 1.83368 1.83398 5.73253 1.83398 10.542C1.83398 15.3515 5.73284 19.2503 10.5423 19.2503Z" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.1673 20.167L18.334 18.3337" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input class="w-full py-4 px-9 border-[1.4px] border-[#ADADAD] rounded-lg outline-none" placeholder="Search..." />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M22.038 5.33459C15.9697 5.33459 11.038 10.2663 11.038 16.3346V21.6329C11.038 22.7513 10.5614 24.4563 9.99305 25.4096L7.88472 28.9113C6.58305 31.0746 7.48138 33.4763 9.86472 34.2829C17.7664 36.9229 26.2914 36.9229 34.193 34.2829C36.4114 33.5496 37.383 30.9279 36.173 28.9113L34.0647 25.4096C33.5147 24.4563 33.038 22.7513 33.038 21.6329V16.3346C33.038 10.2846 28.088 5.33459 22.038 5.33459Z" stroke="#535C5F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                    <path d="M25.4279 5.8664C24.8595 5.7014 24.2729 5.57306 23.6679 5.49973C21.9079 5.27973 20.2212 5.40806 18.6445 5.8664C19.1762 4.50973 20.4962 3.5564 22.0362 3.5564C23.5762 3.5564 24.8962 4.50973 25.4279 5.8664Z" stroke="#535C5F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27.5391 34.9429C27.5391 37.9679 25.0641 40.4429 22.0391 40.4429C20.5357 40.4429 19.1424 39.8195 18.1524 38.8295C17.1624 37.8395 16.5391 36.4462 16.5391 34.9429" stroke="#535C5F" stroke-width="1.5" stroke-miterlimit="10" />
                    <ellipse cx="28.252" cy="8.25012" rx="2.25" ry="2.25" fill="#F50202" />
                </svg>
                <div class="flex gap-3">
                    <Image src={profile} alt="profile" />
                    <div><h5 class="text-[#313638] text-base font-medium">Adesokan Femzy</h5><p class="text-[#939393] text-base font-medium mt-1">Admin</p></div>
                </div>
            </div>

        </section>
    )
}

export default Header