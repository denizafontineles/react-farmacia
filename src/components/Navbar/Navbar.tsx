import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
 

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/' className='hover:underline text-2xl font-bold uppercase'>Farmácia Gen</Link>
            
            <div className='flex gap-4'>
              <Link to='/' className='hover:underline'>Home</Link>
              <Link to="/categorias" className='hover:underline'>Categorias</Link>
              <Link to="/produtos" className='hover:underline'>Produtos</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar