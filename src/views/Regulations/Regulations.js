import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './Regulations.scss';
import { RegulationsContent } from './component/RegulationsContent';

const Regulations = () => {
  const history = useHistory();

  return (
    <div className="view view__regulations">
      <Banner background={Background}>
        <Back onClick={() => history.push('/privacy-policy')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="text-center medium">Regulamin</h4>
        <div className="content">
          <p className="p1 small">
            <RegulationsContent />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Regulations;
