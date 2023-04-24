import { Box, styled } from "@mui/system";

import Footer from "./Footer";
import Message from "./Message";

import { useContext, useState, useEffect, useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, getMessages } from "../../../service/api";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  padding: 1px 80px;
`;
const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");



  const [messages, setMessages] = useState([]);

  const [file, setFile] = useState();

  const [image, setImage] = useState();

  const [incomingMessage, setIncomingMessage] = useState(null);

  const { account, socket, newMessagesFlag, setNewMessagesFlag } = useContext(AccountContext);

  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on('getMessage', data => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      })
    })
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
    //   console.log(data);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessagesFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages(prev => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const sendText = async (e) => {
    // console.log(e);
    const code = e.keycode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit('sendMessage', message);

      // console.log(message);
      await newMessage(message);
      setValue("");
      setFile("");
      setImage("");
      setNewMessagesFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container ref={scrollRef}>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
