export default function About() {
    return (
      <main className="min-h-screen mt-30">
         <div className="absolute left-1/2 transform -translate-x-1/2">
           <img src="/images/gif/AtlasDurmiendo.gif" alt="Atlas durmiendo" className="w-40 mt-10 mb-20" />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl">Como te darás cuenta, Atlas duerme mucho...</h1>
        <p className="mt-4 text-lg w-100">
          Mantener a Atlas ocupado nos toma bastante tiempo. Mientras Atlas duerme, nosotros estamos trabajando en esta página. Pronto estará lista.
        </p>
        </div>
      </main>
    );
  }