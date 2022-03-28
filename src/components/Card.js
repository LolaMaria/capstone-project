import styled from 'styled-components';

export default function PlantCard({ name, fact, water, spot, info }) {
  return (
    <Card>
      <Name>{name}</Name>
      <ul>
        <li>{fact}</li>
        <li>{water}</li>
        <li>{spot}</li>
        <li>{info}</li>
      </ul>
    </Card>
  );
}

const Card = styled.section`
  display: flex;
  justifiy-content: center;
  padding: 20px;
  -webkit-box-shadow: 11px 13px 12px 0px rgba(24, 245, 216, 1);
  -moz-box-shadow: 11px 13px 12px 0px rgba(24, 245, 216, 1);
  box-shadow: 11px 13px 12px 0px rgba(24, 245, 216, 1);
`;
const Name = styled.h2`
  font-size: 20 px;
`;
