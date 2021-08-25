import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/loading';
import { api } from '../../requests/api/api';


const DetailCompanyPage:React.FC = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(async () => {
    const resp = await api.get(`companies/${params.id}`);
    setCompany(resp.data.company);
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
		<div style={{
		  flexDirection: 'column', display: 'flex', lineHeight: 1.5, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 15, marginLeft: 15,
		}}
		>
			<h1 style={{alignSelf: 'center'}}>{company.nome}</h1>
					<h2>
			Demanda:
			{' '}
			{company.demanda}
     </h2>
						<h2>
			Faturamento:
			{' '}
			{ company.faturamento}
      </h2>
						<h2>
			CNPJ:
			{' '}
			{company.cnpj}
      </h2>
			<h2>Sobre: </h2>
						<p>
			{' '}
			{company.sobre}
      </p>
		</div>
  );
};

export default DetailCompanyPage;
