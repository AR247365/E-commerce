import React from "react"
import { Form, useLoaderData, Link } from "react-router-dom"
import FormInput from "./FormInput"

const Filters = () => {
  return (
    <Form>
      <FormInput
        type="search"
        name="search"
        label="search product"
        size="input-sm"
      />
      <button>Search</button>
      <Link to="/products">clear</Link>
    </Form>
  )
}

export default Filters
