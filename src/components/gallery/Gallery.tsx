const Gallery = () => {
    return (
        <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-rose-900 text-center mb-12">Nosso Trabalho</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80"
              alt="Trabalho 1"
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80"
              alt="Trabalho 2"
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80"
              alt="Trabalho 3"
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </section>  
    )
}

export default Gallery;