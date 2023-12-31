import './styles/general.css'
import './styles/header.css'
import './styles/sidebar.css'
import './styles/manga.css'

function App() {

  return (
      <div className='App'>

          <body>

            <div className="title-div">
              <div className="title-container">
                <p>NEO</p>
              </div>
            </div>

            <div className="bar-header">
              <div className="bar-header-container">
                <p>Library</p>
              </div>
            </div>

            <nav className="navbar">

              <div className="icon-container">
                <span className="material-symbols-outlined">
                  library_books
                </span>
                <div className="icon-name">Library</div>
              </div>

              <div className="icon-container">
                <span className="material-symbols-outlined">
                  explore
                </span>
                <div className="icon-name">Explore</div>
              </div>

              <div className="icon-container">
                <span className="material-symbols-outlined">
                  local_fire_department
                </span>
                <div className="icon-name">Popular</div>
              </div>

              <div className="icon-container">
                <span className="material-symbols-outlined">
                  circle_notifications
                </span>
                <div className="icon-name">Updates</div>
              </div>

              <div className="icon-container">
                <span className="material-symbols-outlined">
                  settings
                </span>
                <div className="icon-name">Settings</div>
              </div>

            </nav>

            <main>
              <section>
                <div className="mangas-grid">
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Kagurabachi.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Kagurabachi</p>
                    </div>
                  </div>
          
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Sakamoto-Days.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Sakamoto Days</p>
                    </div>
                  </div>
          
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Onepunch-Man.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>One-Punch Man</p>
                    </div>
                  </div>
          
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Blue-Lock.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Blue Lock</p>
                    </div>
                  </div>
          
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Jujutsu-Kaisen.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Jujutsu Kaisen</p>
                    </div>
                  </div>
          
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Sunken-Rock.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Sun-ken Rock</p>
                    </div>
                  </div>
          
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Another.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Another</p>
                    </div>
                  </div>
          
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Toukyou-Kushu.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Tokyo Ghoul</p>
                    </div>
                  </div>
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Tokyo-Revengers.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Tokyo-Revengers</p>
                    </div>
                  </div>
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Solo-Leveling.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Solo Leveling</p>
                    </div>
                  </div>
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Homunculus.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Homunculus</p>
                    </div>
                  </div>
                  <div className="manga-area">
                    <div className="cover-container">
                      <img className="manga-cover" src="thumbnails/Berserk.jpg" />
                    </div>
                    <div className="manga-title-container">
                      <p>Berserk</p>
                    </div>
                  </div>  
                </div>
              </section>
            </main>        
          </body>
      </div>
  );
}

export default App
