import { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import Categoria from "../../../models/Categoria"
import { listar } from "../../../services/Service"
import CardCategorias from "../CardCategorias/CardCategorias"
import { ToastAlert } from "../../../utils/ToastAlert"

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    try {
      await listar("/categorias", setCategorias)
    } catch (error: any) {
      ToastAlert("Erro ao buscar as categorias", "erro")
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])
  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categorias) => (
              <>
                <CardCategorias key={categorias.id} categorias={categorias} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias