import {useEffect,useState} from 'react'
import DB from '../api/DB';
import { AbogadosInterface, Usuario } from '../interfaces/abogadosInterface';



const useAbogados = () => {

  const [infoAbogados, setstateAbogados] = useState<Usuario[]>([])
  const [isLoading, setisLoading] = useState(true)
  const [totalAbogados, settotal] = useState(0)
  
  const getAbogados = async ()=> {

     const resp = await DB.get<AbogadosInterface>('/api/usuarios');

     const data = resp.data.usuarios
     const total = resp.data.total
     setstateAbogados(data)
     settotal(total)
     setisLoading(false)

  }

  useEffect(() => {
      getAbogados()
  }, [])

  return {
       infoAbogados,
       totalAbogados ,
       isLoading
  }
}

export default useAbogados;