
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCompany, removeCompany } from '../actions/actions'
import { useState } from 'react'

const Job = ({ data }) => {  

  const dispatch = useDispatch()
  const companyList = useSelector(state => state.fav);
  const [favourites, setFavourites] = useState(companyList.find(c => c.company_name === data.company_name) ? true : false)

  return (

    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        {!favourites ?
          <i className="bi bi-suit-heart text-primary" onClick={() => { dispatch(addCompany(data)); setFavourites(!favourites) }}></i>
          :
          <i className="bi bi-suit-heart-fill text-primary" onClick={() => { dispatch(removeCompany(data)); setFavourites(!favourites) }}></i>}
      </Col>
    </Row>
  )
}

export default Job

/* <i className="bi bi-suit-heart-fill text-primary" onClick={() => dispatch(removeCompany(data))}></i> */