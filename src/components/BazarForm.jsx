import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_BAZAR } from '../mutations/BazarMutations';
import { GET_BAZAR } from '../queries/BazarQueries';
import { useAuthContext } from '../hooks/useAuthContext'




const BazarForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuthContext()



    const [addBazar] = useMutation(ADD_BAZAR, {
        context: {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
       
        update(cache, { data: { addBazar } }) {
          const { bazars } = cache.readQuery({ query: GET_BAZAR });
          cache.writeQuery({
            query: GET_BAZAR,
            data: { bazars: [...bazars, addBazar] },
          });
        },
      });

    const onSubmit = data => {
        // data.memberId = "642d5f7c67e31640550e4212"
        data.price = parseInt(data.price)
        // setName(data.name);
        // setPrice(data.price);
        // setDescription(data.description);

        // addBazar(name, price, description);
        addBazar({variables: data});
        
    };


    return (
        <form className="create" onSubmit={handleSubmit(onSubmit)} >
            <h3>Add New Item</h3>
    
            <label>Name</label>
            <input type="text"  
                {...register("name", 
                { 
                    required: true, 
                    pattern:/^(?![^A-Za-z0-9])([A-Za-z]+(?: [A-Za-z]+)*)?(?<![^A-Za-z0-9])$/
                })} 
            />
            {errors.name?.type === 'required' && <p className='error' >*name is required</p>}
            {errors.name?.type === 'pattern' && <p className='error' >No special chatacters or numbers</p>}
    
            <label>Price</label>
            <input type="number"
                {...register("price", 
                { 
                    required: true,
                })}
            />
            {errors.price?.type === 'required' && <p className='error' >*price is required</p>}
          
    
            <label>Description</label>
            <textarea 
                {...register("description", 
                { 
                    required: true, 
                })}
            />
            {errors.description?.type === 'required' && <p className='error' >*description is required</p>}
            
    
            <button>Add Bazar</button>
    
        </form>
      )
}
export default BazarForm