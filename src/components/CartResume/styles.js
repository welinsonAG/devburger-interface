import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  * {
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
  }

  .container-top {
   
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.secondBlack};
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 13px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .items {
      grid-area: items;
      padding-left: 10px;
    }

    .items-price {
      grid-area: items-price;
      padding-left:196px;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 10px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-left: 196px;

    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 22px;

    * {
      font-weight: 700;
      
  }
}
`;
