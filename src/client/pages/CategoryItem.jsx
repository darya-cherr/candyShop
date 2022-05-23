import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(80%);
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.73);
  font-family: "Cambria";
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  position: center;
  cursor: pointer;
  font-weight: 600;
  
`;

const Styles = styled.div `
  .holder {
    background: rgb(255, 255, 255);
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.59);
    padding: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;

  }

  .holder2 {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 3px;
  }

  .holder3 {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: white;
    padding: 20px;
  }

  .button {
    align-self: center;
    alignment: center;
  }



`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/productList/${item.cat}`}>
            <Image src={item.img} />
            <Info>
                <Styles>
                    <div className={"holder"}>
                        <div className={"holder2"}>
                            <div className={"holder3"}>
                        <Title>{item.title}</Title>
                        <div className={"button"}>
                            <Button>SHOP NOW</Button> </div></div></div></div>
            </Styles>
            </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;