import heroImg from '../assets/IMG_20240305_153040_HDR.jpg'

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
        <div className="flex flex-col items-center my-20">
            <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
                ESQUINA DIEHL
            </h1>
            <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
                Reimagina tu espacio de trabajo con las instalaciones adecuadas
            </p>
            <img src={heroImg} alt="Consultorio" className='w-full h-[65vh] object-cover rounded-2xl p-2'/>            
        </div>
    </section>
  )
}