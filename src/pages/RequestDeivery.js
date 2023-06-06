import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import { RiUploadLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { uploadImage, clearUploadedImage } from "../actions/UploadImgAction";
import PlaceorderSteps from "../components/PlaceorderSteps";

const RequestDelivery = () => {
  const [value, setValue] = useState("sender");
  const [sendersName, setSendersName] = useState("");
  const [sendersPhone, setSendersPhone] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const modeOfPayment = ["Transfer", "Cash", "Card", "USSD"];

  const dispatch = useDispatch();
  const uploadedImage = useSelector((state) => state.uploadImg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`bills on ${sendersName} bitces`);

    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        await axios.post("http://localhost:8000/upload", formData);
        console.log("Image uploaded successfully");
        dispatch(uploadImage(selectedImage));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    console.log({
      value,
      sendersName,
      sendersPhone,
      receiverName,
      receiverPhone,
      paymentMethod,
      selectedImage,
    });
    // navigate("/placeorder/bookdiapatch");
  };

  const clearImage = () => {
    dispatch(clearUploadedImage());
  };

  return (
    <div>
      <PlaceorderSteps step1 step2 />

      <Container my="9" bg="#fff">
        <Text fontSize="2xl" my="2" color="#35B368" fontWeight="bold">
          Request a delivery
        </Text>

        <form onSubmit={handleSubmit}>
          {uploadedImage && (
            <div>
              {uploadedImage instanceof Blob && (
                <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" />
              )}
              <button onClick={clearImage}>Clear Image</button>
            </div>
          )}
          <FormControl bg="#fff" p="5">
            <InputGroup mb="8">
              <Input
                type="file"
                id="file"
                display="none"
                accept="image/*"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />

              <InputRightElement width="fit-content">
                <label htmlFor="file">
                  <Button
                    as="span"
                    leftIcon={<RiUploadLine />}
                    colorScheme="teal"
                  >
                    Upload item
                  </Button>
                </label>
              </InputRightElement>
            </InputGroup>

            <FormLabel>Sender's Contact</FormLabel>
            <InputGroup my="6">
              <Input
                size="md"
                variant="outline"
                type="text"
                placeholder="Sender's name"
                value={sendersName}
                onChange={(e) => setSendersName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup my="6">
              <InputLeftAddon children="+234" />
              <Input
                size="md"
                variant="outline"
                type="number"
                placeholder="Phone"
                required
                value={sendersPhone}
                onChange={(e) => setSendersPhone(e.target.value)}
              />
            </InputGroup>

            <FormLabel>Receiver's Contact</FormLabel>
            <InputGroup my="6">
              <Input
                size="md"
                variant="outline"
                type="text"
                placeholder="Receiver's name"
                required
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
              />
            </InputGroup>
            <InputGroup my="6">
              <InputLeftAddon children="+234" />
              <Input
                size="md"
                variant="outline"
                type="number"
                placeholder="Phone"
                required
                value={receiverPhone}
                onChange={(e) => setReceiverPhone(e.target.value)}
              />
            </InputGroup>

            <RadioGroup onChange={setValue} value={value}>
              <FormLabel>Who is paying? </FormLabel>
              <Stack direction="row">
                <Radio value="sender" colorScheme="green">
                  {sendersName ? sendersName : "sender"}
                </Radio>
                <Radio value="receiver" colorScheme="green">
                  {receiverName ? receiverName : "receiver"}
                </Radio>
              </Stack>
            </RadioGroup>

            <InputGroup my="6">
              <Select
                placeholder="Select mode of payment"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                }}
                required
              >
                {modeOfPayment.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </InputGroup>

            <Button bg="#35B368" color="#fff" width="100%" my="5" type="submit">
              Book dispatcher
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default RequestDelivery;
