import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1280px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Repository = styled.div`
  width: 250px;
  background: #FFF;
  border-radius: 4px;
  margin: 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: 600;
      padding: 12px 20px;

      small {
        font-weight: 400;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f4f4f4;
      }
    }
  }
`;
