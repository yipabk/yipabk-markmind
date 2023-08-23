import { FadingHeader } from '../../components/commons/FadingHeader'

export const Care = () => {
    return (
        <div>
            <FadingHeader
                bg='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/600001c3-7f2c-4f7e-88ba-50856e624266/dezkps2-08966b41-8889-4c90-8d38-5e20018568c4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwMDAwMWMzLTdmMmMtNGY3ZS04OGJhLTUwODU2ZTYyNDI2NlwvZGV6a3BzMi0wODk2NmI0MS04ODg5LTRjOTAtOGQzOC01ZTIwMDE4NTY4YzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Cyn8s4vZWIyZ4ovptutoH87LtpN-3IDWe1hc4jYe5a4'
                className='flex flex-col justify-end items-center h-[100vh] w-full'>
                <div className='text-white font-display text-5xl mb-16'>CARE</div>
                <div className='text-grey font-display text-5xl mb-16'>(Resource, Awareness, Inspiration, Stories, Education)</div>
            </FadingHeader>
            <div className='flex flex-col justify-center items-center w-100 min-h-[100vh] px-6 w-full bg-blue/40 gap-12'>
                <div className='flex flex-col bg-white w-full justify-center items-center min-h-[100vh]'>
                    <div className='flex md:flex-col flex-col-reverse md:px-8 xl:px-24 2xl:px-48 py-24 md:py-48 w-full gap-16 md:gap-4'>
                        <div className='text-3xl lg:text-5xl tracking-wide mb-6 font-display'>1. Program "YIPPIE"</div>
                        <div className='flex md:flex-row flex-col-reverse'>
                            <div className='text-black mr-10'>
                                <div className='text-sm lg:text-base font-light w-[16rem] sm:w-[24rem] lg:w-[34rem] leading-5 text-justify'>
                                    <div className='mb-4'>
                                        Program “Kita Bisa” merupakan program layanan pendampingan bagi orang tua dengan anak berkebutuhan khusus.
                                    </div>
                                    <div className='mb-4'>
                                        Kami meyakini bahwa setiap orang tua memiliki peran yang sangat besar dan kuat dalam membantu anak mengatasi berbagai hambatan dan kesulitan yang diakibatkan kondisi kekhususan mereka.
                                    </div>
                                    <div className='mb-4'>
                                        Oleh sebab itu, orang tua perlu belajar memahami kondisi anak dan mengerti metode intervensi yang tepat untuk pengaplikasian di rumah agar anak dapat bertumbuh, berkembang, belajar, dan melakukan aktivitas yang bermakna.
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center'>
                                <div className='relative w-[15rem] h-[15rem] md:w-[17rem] md:h-[17rem] xl:w-[30rem] xl:h-[30rem]'>
                                    <img
                                        className='absolute bg-black top-0 left-0 w-[14rem] h-[14rem] md:w-[16rem] md:h-[16rem] xl:w-[28rem] xl:h-[28rem]'
                                        src='https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?crop=0.665xw:1.00xh;0.112xw,0&resize=980:*'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex md:flex-col flex-col-reverse md:px-8 xl:px-24 2xl:px-48 py-24 md:py-48 w-full gap-16 md:gap-4'>
                        <div className='text-3xl lg:text-5xl tracking-wide mb-6 font-display'>2. #PEDULICHALLENGE - Care Package</div>
                        <div className='flex md:flex-row flex-col-reverse'>
                            <div className='text-black mr-10'>
                                <div className='text-sm lg:text-base font-light leading-5 text-justify'>
                                    <div className='mb-4'>
                                        Program “Kita Bisa” merupakan program layanan pendampingan bagi orang tua dengan anak berkebutuhan khusus.
                                    </div>
                                    <div className='mb-4'>
                                        Kami meyakini bahwa setiap orang tua memiliki peran yang sangat besar dan kuat dalam membantu anak mengatasi berbagai hambatan dan kesulitan yang diakibatkan kondisi kekhususan mereka.
                                    </div>
                                    <div className='mb-4'>
                                        Oleh sebab itu, orang tua perlu belajar memahami kondisi anak dan mengerti metode intervensi yang tepat untuk pengaplikasian di rumah agar anak dapat bertumbuh, berkembang, belajar, dan melakukan aktivitas yang bermakna.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col-reverse'>
                            <div className='flex w-full justify-center'>
                                <div className='relative w-[15rem] h-[15rem] md:w-[17rem] md:h-[17rem] xl:w-[30rem] xl:h-[30rem]'>
                                    <img
                                        className='absolute bg-black top-0 left-0 w-[14rem] h-[14rem] md:w-[16rem] md:h-[16rem] xl:w-[28rem] xl:h-[28rem]'
                                        src='https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?crop=0.665xw:1.00xh;0.112xw,0&resize=980:*'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}