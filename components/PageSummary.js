import styled from 'styled-components';

const PageSummary = styled.div`
  padding: 100px 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  background-color: ${props => props.color};
`;

export default PageSummary;