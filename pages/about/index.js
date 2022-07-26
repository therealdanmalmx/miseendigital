import { images } from "../../utils";

const about = () => {
    return (
        <>
        <div className="app__hero flex h-[calc(100vh_-_113px)] max-w-full flex-col items-start justify-center bg-secondary-color bg-cover bg-center" style={{backgroundImage: `url(${images.sample.src})`}}>
            <h1 className="mb- pl-16 max-w-4xl text-left text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
            <span className="text-white">About us</span>
            </h1>
            <p className="mb-8 pl-16 text-lg text-white text-left">
            Lorem ipsum dolor sit amet, duo summo recteque repudiandae ea. Ea utinam accommodare pri, <br />
            an duo explicari interesset theophrastus, eu munere nonumes delicatissimi duo.
            </p>
        </div>
    
        <div className="app__contact w-full grid md:grid-cols-2 justify-items-center py-28 px-8">
            <div className="intro-company">
                <p className="text-left font-normal leading-10 text-xl pb-2">Customer Experience Design</p>
                <h1 className="app__contact-head-text mb-10 flex-col text-left font-bold leading-tight md:leading-snug text-3xl md:text-5xl">
                    We are experience agency <br/> all over the world
                </h1>
            </div>
            <div className="text-company md:pt-32 md:w-3/4">
                <p>Lorem ipsum dolor sit amet, latine habemus ad pro. Vis molestiae persequeris eu, cum ea civibus aliquando. Sea quot velit eu, saepe fabulas qui id. Cu eum perfecto qualisque, sit ea nostrud dolorum nonumes. Pro in accumsan sententiae. Eum te quot dicam deterruisset, altera fabellas his et, ad veri iriure cum.</p>
                <br/>
                <p>Mel ei molestie facilisis. Mei utinam mollis id, quot labore mediocrem ne nec, wisi postea patrioque ne cum. Ei his dicam iisque, eu feugait electram eam. Tibique expetenda sit te, dicam scriptorem ei ius, te vel decore vivendo. Aperiri iudicabit ius ex.</p>
            </div>
        </div>
      </>
    )
  }
  
export default about
  