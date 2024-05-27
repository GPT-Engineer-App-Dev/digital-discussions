import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Text, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = "Title is required.";
    if (!formData.content) tempErrors.content = "Content is required.";
    if (!formData.category) tempErrors.category = "Category is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful post creation (e.g., API call)
      console.log("Post created successfully", formData);
      navigate("/");
    }
  };

  return (
    <Container maxW="container.sm" mt={10}>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Create Post
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <Text color="red.500">{errors.title}</Text>}
            </FormControl>
            <FormControl isInvalid={errors.content}>
              <FormLabel>Content</FormLabel>
              <Textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
              {errors.content && <Text color="red.500">{errors.content}</Text>}
            </FormControl>
            <FormControl isInvalid={errors.category}>
              <FormLabel>Category</FormLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="General Discussion">General Discussion</option>
                <option value="Programming">Programming</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
                <option value="Networking">Networking</option>
              </Select>
              {errors.category && <Text color="red.500">{errors.category}</Text>}
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Create Post
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;