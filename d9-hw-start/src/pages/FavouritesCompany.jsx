import CompanyItem from '../components/CompanyItem';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';

export default function FavouritesCompany() {

    const companyList = useSelector(state => state.fav);
    console.log(companyList);
    
    return (
        <Container className='my-5'>
            <ListGroup>
                {companyList.map(c => <CompanyItem key={c._id} data={c} />)}
            </ListGroup>
        </Container>
    );
}
