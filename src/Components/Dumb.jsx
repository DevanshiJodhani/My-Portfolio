import styled from 'styled-components';

const Dumb = (props) => {

  return (
    <Container > {/*id="contact">*/}
      <Heading>
        <h2>
          Contact <span>Me!</span>
        </h2>
      </Heading>
      <Form> {/*onSubmit={handleSubmit}*/}
        <Box>
          <InputField>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
            //   value={formData.name}
            //   onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
              required
            />
          </InputField>
        </Box>
        <TextareaField>
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            // value={formData.message}
            // onChange={handleChange}
            required
          ></textarea>
        </TextareaField>
        <BtnBox>
          <button type="submit" className="btn">
            Submit
          </button>
        </BtnBox>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 20px;
  background: #112e42;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 990px) {
    padding: 50px 20px;
  }
`;

const Heading = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;

  span {
    color: #00abf0;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
  }
`;

const InputField = styled.div`
  position: relative;
  width: 49%;
  margin: 15px 0;

  input {
    width: 100%;
    height: 100%;
    padding: 15px;
    font-size: 16px;
    background: transparent;
    border-radius: 12px;
    border: 2px solid #00abf0;
    outline: none;
    color: #ededed;

    &::placeholder {
      color: #ededed;
    }
  }

  @media (max-width: 990px) {
    width: 100%;
  }
`;

const TextareaField = styled.div`
  position: relative;
  margin: 18px 0 13px;
  display: flex;

  textarea {
    width: 100%;
    height: 100%;
    padding: 15px;
    font-size: 16px;
    background: transparent;
    border-radius: 12px;
    border: 2px solid #00abf0;
    outline: none;
    color: #ededed;
    resize: none;

    &::placeholder {
      color: #ededed;
    }
  }
  @media (max-width: 990px) {
  }
`;

const BtnBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 385px;
  height: 50px;
  margin-top: 30px;

  button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 100%;
    background: #00abf0;
    border: 2px solid #00abf0;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
    color: #081b29;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    color: #ededed;

    &:hover {
      color: #081b29;
      &::before {
        width: 100%;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #00abf0;
      z-index: -1;
      transition: 0.5s;
    }
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 50px;
    gap: 10px;
  }
`;

export default Dumb;
