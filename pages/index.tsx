import indexModuleCss from "./index.module.scss";

// const sayi: number = "5"

function HomePage() {
  return (
    <div>
      <h1 className="baslik">Başlık</h1>
      <div className={indexModuleCss.welcome}>Welcome to Next.js!</div>
      <img src="/next.js-ile-proje-baslangic-altyapisi-olusturma.png" alt="ilk-resmimiz" width="591" height="164" />
    </div>
  );
}

export default HomePage;
