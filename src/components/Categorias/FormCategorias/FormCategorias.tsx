import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { atualizar, listar, cadastrar } from "../../../services/Service"
import { ToastAlert } from "../../../utils/ToastAlert"

function FormCategorias() {
  const [categorias, setCategorias] = useState<Categoria>({} as Categoria)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    await listar(`/categorias/${id}`, setCategorias)
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value,
    })

    console.log(JSON.stringify(categorias))
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categorias, setCategorias)
        ToastAlert("Categoria atualizada com sucesso", "sucesso")
        retornar()
      } catch (error: any) {
        ToastAlert("Erro ao atualizar a categoria", "erro")
      }
    } else {
      try {
        await cadastrar(`/categorias`, categorias, setCategorias)
        ToastAlert("Categoria cadastrada com sucesso", "sucesso")
      } catch (error: any) {
        ToastAlert("Erro ao cadastrar a categoria", "erro")
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastre uma nova categoria" : "Editar categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da categoria</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  )
}

export default FormCategorias