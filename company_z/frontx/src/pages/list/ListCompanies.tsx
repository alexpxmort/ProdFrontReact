import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useAxios } from '../../hooks/useAxios';
import Card from '../../components/card';
import SearchBar from '../../components/searchBar';
import Pagination from '../../components/pagination/pagination';
import './listCompanies.scss';
import Spinner from '../../components/loading';
import Message from '../../components/msg_alerts/msg_alerts.component';
import { api } from '../../requests/api/api';
import VALUES_OPTIONS from '../../utils/options.utils';


interface Company{
	nome:string;
	cnpj:string;
	data:any;
}

const ListCompaniesPage:React.FC = ({history}) => {
  const [keyword, setKeyWord] = useState('');
  const [payload, setPayload] = useState({page: 0, limit: 10});


  const {data} = useAxios<Company[]>(`companies?page=${payload.page}&size=${payload.limit}&keyword=${keyword}`);

  if (!data) {
    return <Spinner />;
  }



  const goAdd = () => {
    history.push('/add');
  };

  const goEdit = (id) => {
    history.push(`/company/edit/${id}`);
  };

  const deleteAsync = async (id) => {
    try {
      const resp = await api.delete(`companies/${id}`);

      if (!resp.data.error) {
        setKeyWord('');
      }
    } catch (err) {
      Message(err.message, 'warning');
    }
  };


  const goDetail = (id) => {
    history.push(`/company/detail/${id}`);
  };

  const 	paginate = (pageNumber) => {
    setPayload({page: pageNumber - 1, limit: 5});
  };

  return (
	<div>
				<div style={{
				  flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', paddingRight: 40,
				}}
				>
						<Button variant="outlined" onClick={() => goAdd()}>
							Adicionar Company
{' '}
<AddIcon />
						</Button>
    </div>
		<div className="container">
			<SearchBar onClick={setKeyWord} />
				{
			data.data.map((val, idx) => (
				<Card company={val} key={idx} edit={() => goEdit(val.id)} view={() => goDetail(val.id)} deleteProp={() => deleteAsync(val.id)} />
			))
		}
		 <Pagination
        dataPerPage={payload.limit}
        totalData={data.total}
        paginate={paginate}
		 />
		</div>
	</div>
  );
};
export default withRouter(ListCompaniesPage);
