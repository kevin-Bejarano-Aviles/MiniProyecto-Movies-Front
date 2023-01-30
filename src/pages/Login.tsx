import { UsePost } from "../api/hooks/UsePost"
import { UseForm } from '../hooks/UseForm';
import { FormEvent } from '../interfaces/tipos';
import {useNavigate} from 'react-router-dom'
import { Header } from '../components/Header';
export const Login = () => {
  const navigate = useNavigate()
  const {userLogin,errorLogin} = UsePost()
  const {formulario,OnChance} = UseForm({
    email:'',
    pass:''
  });
  const OnSubmit = (evento:FormEvent)=>{
    evento.preventDefault();
    userLogin(formulario)
  }
  return (
    <>
      <Header/>
        <div className='flex items-center justify-center h-5/6'>
        
          <div className='basis-2/6 border border-stone-800 rounded-2xl p-2.5 m-2.5 h-max w-96'>
            <div className='h-full'>
            <form 
            onSubmit={(e)=>OnSubmit(e)}
            className='flex flex-col h-max my-2.5'
            > 
              <h3 className='text-center'>Login</h3>
              <div className='m-2.5 p-2.5 flex flex-col'>
                <input 
                className='border border-stone-800 rounded-2xl pl-2.5 mx-2'
                type="text"
                name='email'
                placeholder="Email@example.com"
                value = {formulario.email}
                onChange= {(e)=>OnChance(e.target.value,'email')}
                />
              </div>
              <div className='m-2.5 p-2.5 flex flex-col'>
                <input 
                className='border border-stone-800 rounded-2xl pl-2.5 mx-2'
                type="password"
                name='pass'
                placeholder="password"
                value = {formulario.pass}
                onChange= {(e)=>OnChance(e.target.value,'pass')}
                />
              </div>
              <p className='text-red-600 ml-2.5'>{errorLogin}</p>
              <div className='m-2.5 p-2.5 flex justify-around'>
                
              <button onClick={()=>navigate('/movies')} className='border border-stone-800 rounded-2xl w-20 mx-2 bg-red-500 hover:bg-red-700 text-white '>Cancelar</button>
              <button className='border border-stone-800 rounded-2xl w-20 mx-2 bg-sky-500 hover:bg-sky-700 text-white '  type='submit'>Enviar</button>
              </div>
            </form>
            </div>
            
          </div>
        </div>
    </>
  )
}
