import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="bg-white ">
        <div className="relative isolate px-6 pt-14 sm:pb-16 lg:px-8">

          <div className="text-center bg-blue-100 m-4 p-32 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Bem-vindo à nossa farmácia, onde cuidar da sua saúde é a nossa prioridade.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Navegue pelo nosso site e descubra como podemos ajudar você a viver com mais saúde e bem-estar. Seja bem atendido, seja bem cuidado por nossa família farmacêutica.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/produtos" className="text-sm font-semibold leading-6 text-gray-900">Conheça nossos produtos <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home