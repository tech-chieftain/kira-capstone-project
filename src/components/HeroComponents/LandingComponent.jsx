import { FormControl, InputGroup, Image } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { Background, Container, SearchForm, Btn } from "./Landing.styled";

const LandingHero = ({ search }) => (
  <Background>
    <div className="d-flex flex-row justify-content-end align-items-center">
      <Container>
        <div className="freelance">
          <p>
            Find the perfect <span>freelance</span> services for your business
          </p>
        </div>
        {search && (
          <SearchForm className="d-flex shadow ">
            <InputGroup.Text id="basic-addon">
              <IoSearch size="34px" />
            </InputGroup.Text>
            <FormControl
              type="search"
              placeholder="Find Service"
              aria-label="Search"
              className="input"
              onChange=""
            />
            <Btn>Search</Btn>
          </SearchForm>
        )}
      </Container>
      <div className="img">
        <Image src="/image1.png" alt="" />
      </div>
    </div>
  </Background>
);

LandingHero.propTypes = {
  search: PropTypes.bool,
};

LandingHero.defaultProps = {
  search: true,
};

export default LandingHero;
