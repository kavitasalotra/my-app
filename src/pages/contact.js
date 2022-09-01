import React from 'react'
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import { useState } from 'react';


const contact = () => {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <Layout>
        <Contact />
      </Layout>
    </>
  )
}

export default contact;