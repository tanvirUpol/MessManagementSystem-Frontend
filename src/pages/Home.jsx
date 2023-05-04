import { useQuery } from "@apollo/client"
import { GET_BAZAR } from "../queries/BazarQueries"
import Table from "../components/Table"
import BazarForm from "../components/BazarForm"
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect } from "react"




const Home = () => {
  const {user} = useAuthContext()
  
  
 
  const {loading,error, data, refetch} = useQuery(GET_BAZAR,{
    context: {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    },
  })
  
  useEffect(() => {
    refetch()
  }, [refetch]);

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>


  return (
    <div className="home">
      <div className="bazars" >
          {
            !loading && !error && <Table data={data.bazars} />
          }
      </div>
      <BazarForm/>
    </div>
  )
}
export default Home