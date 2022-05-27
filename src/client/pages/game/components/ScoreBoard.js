import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  width: 300px;
  height: 100px;
  background-color: #f5586a;
  border: 2px solid #efc952;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.59) !important;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-family: "Cambria";

  h2 {
    color: #e5faf2;
  }
`;



const ScoreBoard = ({ score }) => {
  return (
    <Container>
        <h2>YOUR SCORE</h2>
      <h2>{score}</h2>
    </Container>
  )
}

export default ScoreBoard