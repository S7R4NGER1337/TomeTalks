import './Details.css'

export default function Details(){

return (


    
<section className="py-5">
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <a
            data-fslightbox="mygalley"
            className="rounded-4"
            target="_blank"
            data-type="image"
          >
            <img
              style={{ maxWidth: "100%", height: "60vh", margin: "auto", outline: 'none' }}
              className="rounded-4 fit"
              src="https://i3.helikon.bg/products/4862/21/214862/214862z.jpg?w=180&t=1702486845"
            />
          </a>
        </div>
        {/* thumbs-wrap.// */}
        {/* gallery-wrap .end// */}
      </aside>


      <main className="col-lg-6" style={{border: '1px'}}>
        <div className="ps-lg-3">
          <h4 className="zaglavie">
            Quality Mens Hoodie for Winter, Mens Fashion <br />
            Casual Hoodie
          </h4>
        </div>
        <p>
          Modern look and quality demo item is a streetwear-inspired collection
          that continues to break away from the conventions of mainstream
          fashion. Made in Italy, these black and brown clothing low-top shirts
          for men.
        </p>
      </main>
        </div>
  </div>
</section>)
}
