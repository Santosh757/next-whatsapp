import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
  padding: 15px;
  padding-bottom: 26px;
  margin: 10px;
  width: fit-content;
  min-width: 60px;
  position: relative;
  text-align: right;
  border-radius: 8px;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #daffbd;
`;
const Receiver = styled(MessageElement)`
  text-align: left;
  background-color: whitesmoke;
`;

const Timestamp = styled.span`
  padding: 10px;
  color: gray;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
`;
