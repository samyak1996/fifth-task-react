import style from "./App.module.css";

function App() {
  return (
    <>
      <header className={style.header}>
        <h1>
          <span className={style.span}>Backpackers Travel and Guide</span>
        </h1>
        <div className={style.image}>
          <img
            src="https://www.nationsonline.org/gallery/Monuments/Mount-Everest-from-south.jpg"
            width="1200"
          ></img>
        </div>
      </header>

      <nav>
        <ul className={style.list}>
          <li>Home</li>
          <li>Places</li>
          <li>Activities</li>
          <li>Hotel</li>
          <li>Car Rentals</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <main className={style.mainbody}>
        <section>
          <div className={style.section}>
            We are here for all your travel needs. Planning for travel can be
            hectic. Let us take care of that part so that you can enjoy the
            rest.
          </div>
        </section>

        <aside className={style.side}>
          Click here for weather updates.
          <div className={style.weatherimage}>
            <img
              src="https://w7.pngwing.com/pngs/1005/263/png-transparent-weather-forecasting-logo-weather-blue-game-cloud-thumbnail.png"
              height="100"
              width="100"
            ></img>
          </div>
        </aside>

        <footer className={style.foot}>
          Explore a world of travel with Backpackers. <br />
          <div className={style.footertwo}>
            Discover new places and experiences
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
