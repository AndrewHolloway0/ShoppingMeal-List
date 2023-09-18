
// Import Styles
import '../styles/home.scss'

// Import Page Sections


export default function Home() {
  return (
    <>
      <div className="contentContainer">
        <h1 className="pageTitle">Test</h1>
        <section className="">
          <h3>Select the meals you would like to have</h3>
          <input type="checkbox" id="opt_hotdogs"/>
          <label htmlFor="opt_hotdogs">Hot Dogs</label>
          <input type="checkbox" id="opt_Tacos"/>
          <label htmlFor="opt_Tacos">Tacos</label>
          <input type="checkbox" id="opt_burgers"/>
          <label htmlFor="opt_burgers">Burgers</label>
          <input type="checkbox" id="opt_Pilaf"/>
          <label htmlFor="opt_Pilaf">Pilaf</label>
          <input type="checkbox" id="opt_Nachos"/>
          <label htmlFor="opt_Nachos">Nachos</label>
          <input type="checkbox" id="opt_Spaghetti"/>
          <label htmlFor="opt_Spaghetti">Spaghetti Bolognese</label>
          <input type="checkbox" id="opt_ThaiGreenCurry"/>
          <label htmlFor="opt_ThaiGreenCurry">Thai Green Curry</label>
          <input type="checkbox" id="opt_PastaMeatballs"/>
          <label htmlFor="opt_PastaMeatballs">Pasta and Meatballs</label>
          <input type="checkbox" id="opt_FriedRice"/>
          <label htmlFor="opt_FriedRice">Special Fried Rice</label>
          <input type="checkbox" id="opt_Vindaloo"/>
          <label htmlFor="opt_Vindaloo">Vindaloo</label>
          <input type="checkbox" id="opt_ShepardsPie"/>
          <label htmlFor="opt_ShepardsPie">Shepards Pie</label>
          <input type="checkbox" id="opt_Fettaccini"/>
          <label htmlFor="opt_Fettaccini">Fettacinni</label>
        </section>
      </div>
    </>
  )
}