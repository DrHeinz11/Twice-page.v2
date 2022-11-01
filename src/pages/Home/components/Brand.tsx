
type Props = {}

const Brand = (props: Props) => {
  return (
    <>
      <section className="brand__container">
        <img className='img__brand--header' src="https://kpopping.com/documents/9f/4/800/BLACKPINK-Jisoo-for-Marie-Claire-Korea-September-2022-Issue-documents-2(1).jpeg?v=2ab59" alt="Jisoo-Collection" />
        <article className="brand__copy">
          <p className="brand__info section__title--subtitle">our brands history</p>
          <h2 className="brand__title section__title"> the philosophy of claire</h2>
          <p className="brand__paragraph paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae officia placeat, soluta consectetur sit ratione possimus corporis reiciendis, culpa unde quo!
            suscipit autem enim
            neque?
          </p>
          <br />
          <p className='paragraph'>Quod dolorem, voluptatum, asperiores unde, nulla assumenda odit

            inventore similique aperiam quas sequi
            molestias
            deleniti aliquid consectetur? Accusantium enim veritatis similique!</p>
        <button className="brand__button cta">learn more</button>
        </article>
      </section>
    </>
  )
}
export default Brand

