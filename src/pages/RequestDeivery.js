import {
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
} from "@chakra-ui/react";
import React, { useState } from "react";

const RequestDeivery = () => {
  const [value, setValue] = useState("sender");
  console.log(value);
  const modeOfPayment = ["Transfer", "Cash", "Card", "USSD"];
  return (
    <Container>
      <Text fontSize="2xl" my="2" color="#35B368" as="B">
        {" "}
        Request a deivery
      </Text>

      <form>
        <FormControl bg="#fff" p="5">
          <FormLabel>pickup's Contact</FormLabel>
          <InputGroup my="6">
            <Input
              id="pickupContact"
              size="md"
              variant="outline"
              type="text"
              placeholder="pickups name"
              // onChange={(e) => setDeliver(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup my="6">
            <InputLeftAddon children="+234" />
            <Input
              size="md"
              variant="outline"
              type="tel"
              placeholder="Phone"
              // onChange={(e) => setDeliver(e.target.value)}
              required
            />
          </InputGroup>

          <FormLabel>Receiver's Contact</FormLabel>
          <InputGroup my="6">
            <Input
              size="md"
              variant="outline"
              type="text"
              placeholder="Receivers name"
              // onChange={(e) => setDeliver(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup my="6">
            <InputLeftAddon children="+234" />
            <Input
              size="md"
              variant="outline"
              type="tel"
              placeholder="Phone"
              // onChange={(e) => setDeliver(e.target.value)}
              required
            />
          </InputGroup>
          <RadioGroup onChange={setValue} value={value}>
            <FormLabel>Who is paying? </FormLabel>
            <Stack direction="row">
              <Radio value="sender" colorScheme="green">
                Sender
              </Radio>
              <Radio value="receiver" colorScheme="green">
                Receiver
              </Radio>
            </Stack>
          </RadioGroup>
          <InputGroup my="6">
            <Select
              placeholder="Select mode of payment"
              //   value={category}
              //   onChange={(e) => setCategory(e.target.value)}
            >
              {modeOfPayment.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup my="6">
            <Input type="file" />
          </InputGroup>
        </FormControl>
      </form>
    </Container>
  );
};

export default RequestDeivery;
