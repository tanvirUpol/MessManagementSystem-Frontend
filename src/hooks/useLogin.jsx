
import { useAuthContext } from './useAuthContext'

import { useMutation } from "@apollo/client"
import { LOGIN_MEMBER } from '../mutations/memberMutations'


export const useLogin = () => {

  const [loginMember, { loading, error }] = useMutation(LOGIN_MEMBER);

  
  const { dispatch } = useAuthContext()

  const login = async (phone, password) => {
   

    try {
        const { data } = await loginMember({ variables: { phone, password } });
        console.log(data.loginMember);
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(data.loginMember))

        // update the auth context
        dispatch({type: 'LOGIN', payload: data.loginMember})
    }catch(error){
        console.error(error.message);
    }
    
    


  }

  return { login, loading, error }
}