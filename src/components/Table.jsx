const Table = ({data}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
export default Table