import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import './Admin.css'
import { useNavigate } from "react-router-dom";



function Addproduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();


  const onFormSubmit = (productObj) => {
    
    axios
      .post("http://localhost:5000/product/create-product", productObj)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong in creating user");
      });
  };



  return (
    <div className="admin ">
      <Container className="box d-flex justify-content-center">

        <div className="formsize ">
          <div >
            <h1 className="mb-4">Add Product</h1>

          </div>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            {/* Product */}
            <Form.Group className="pt-2 pb-2">
              <Form.Control type="text" placeholder="Product Name" {...register("productname", { required: true })} />
              {/* validation error message for username */}
              {errors.username && (
                <p className="text-danger">* Product name required</p>
              )}
            </Form.Group>

            {/* Product */}
            <Form.Group className="pt-2 pb-2">
              <Form.Control type="text" placeholder="Device" {...register("device", { required: true })} />
              {/* validation error message for username */}
              {errors.username && (
                <p className="text-danger">* Product name required</p>
              )}
            </Form.Group>

            {/* Product */}
            <Form.Group className="pt-2 pb-2">
              <Form.Control type="text" placeholder="Product Model" {...register("brand", { required: true })} />
              {/* validation error message for username */}
              {errors.username && (
                <p className="text-danger">* Product name required</p>
              )}
            </Form.Group>

            {/* Product */}
            <Form.Group className="pt-2 pb-2">
              <Form.Control type="text" placeholder="Product price" {...register("price", { required: true })} />
              {/* validation error message for username */}
              {errors.username && (
                <p className="text-danger">* Product name required</p>
              )}
            </Form.Group>

            {/* Product */}
            <Form.Group className="pt-2 pb-2">
              <Form.Control type="text" placeholder="Product Details" {...register("details", { required: true })} />
              {/* validation error message for username */}
              {errors.username && (
                <p className="text-danger">* Product name required</p>
              )}
            </Form.Group>

            {/* Product */}
            <Form.Group className="pt-2 pb-2">
              <Form.Control type="text" placeholder="Image Url" {...register("imgurl", { required: true })} />
              {/* validation error message for username */}
              {errors.username && (
                <p className="text-danger">*Image url required</p>
              )}
            </Form.Group>


            <Button className="mt-2" variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </div>
      </Container >
    </div >
  );
}


export default Addproduct;