import Header from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Card } from "./components/Card"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="h-[90vh] flex p-8 gap-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full">
          <div className="rounded-2xl mb-4">
            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0608/9cJzlUE7sOpwvrCmOzxubniq.jpg" className="w-full h-[500px] object-cover rounded-2xl" />
          </div>

          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
            <Card
              img="https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png"
              title="Resident Evil 4 Remake"
              category="PS5"
              price="69.99"
            />
            <Card
              img="https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-43dd4a2f28f9edbf0ed1461339fc11d4"
              title="Alan Wake"
              category="Xbox 360"
              price="14.99"
            />
            <Card
              img="https://www.filmmusicsite.com/es/images/covers/xlarge/39953.jpg"
              title="Killing Floor 2"
              category="PS4"
              price="29.99"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/ap/rnd/202206/0206/WmriZBRlSeXWEEDLJOWW7MdW.png"
              title="Resident Evil 3 Remake"
              category="PC"
              price="39.99"
            />
            <Card
              img="https://cdn-products.eneba.com/resized-products/4743TLCwvzrj27Sw1PvdE9J0Ql97q88rJt1bdq6HZH8_350x200_1x-0.jpeg"
              title="Phasmophobia"
              category="PC"
              price="9.99"
            />

            <Card
              img="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/159/532/products/resident-21-a7f8722749d39daf5d15880541338666-640-0.jpg"
              title="Resident Evil 2 Remake"
              category="PS4"
              price="49.99"
            />
            <Card
              img="https://media.vandal.net/m/38957/dead-island-definitive-edition-2016711114241_1.jpg"
              title="Dead Island"
              category="PC"
              price="19.99"
            />
            <Card
              img="https://m.media-amazon.com/images/I/81wOSGj1g3L.jpg"
              title="Silent Hill: Downpour"
              category="Xbox 360"
              price="34.99"
            />
            <Card
              img="https://static.nitrado.net/cdn/content_files/production/games/project-zomboid/gamecovers/project-zomboid-preview.jpg"
              title="Project Zomboid"
              category="PC"
              price="19.99"
            />
            <Card
              img="https://media.vandal.net/m/20846/dayz-201953013153533_11.jpg"
              title="DayZ"
              category="PS4"
              price="44.99"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
