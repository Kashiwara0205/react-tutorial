import PropTypes from 'prop-types'

function Row(props){
  return (
    <tr>
      <td>{ props.id }</td>
      <td>{ props.name }</td>
    </tr>
  )
}

Row.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
}

function Table(props){

  const Rows = props.records.map((m) => <Row id={m.id} name={m.name} key={m.id}></Row>)

  return (
    <table border="true">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { Rows }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  records: PropTypes.array
}

export default Table