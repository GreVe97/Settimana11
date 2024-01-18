import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { removeCompany } from '../actions/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CompanyItem({ data }) {

    const dispatch = useDispatch()

    return (
        <ListGroup.Item >
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            <i className="bi bi-suit-heart-fill text-primary float-end" onClick={() => dispatch(removeCompany(data))}></i>
        </ListGroup.Item>
    )
}