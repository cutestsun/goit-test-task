import { Link } from "react-router-dom";
import { SecondaryBtn } from "../../components/SecondaryBtn/SecondaryBtn";
import { Description, Image, MainWrapper, Title } from "./Home.styled";
import picture from "src/img/picture.png";
import picture2x from "src/img/picture@2x.png";
import picture3x from "src/img/picture@3x.png";

export default function Home() {
  return (
    <MainWrapper>
      <Title>Tweets </Title>
      <Image
        src={picture}
        srcSet={`${picture} 1x, ${picture2x} 2x, ${picture3x}3x`}
        loading="lazy"
      />
      <Description>Your Social World, Your Way</Description>
      <Link to="tweets">
        <SecondaryBtn>go to tweets</SecondaryBtn>
      </Link>
    </MainWrapper>
  );
}
