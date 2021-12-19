import React from "react";
import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <input
        // value={newProduct.title}
        type="text"
        className="m-1 col-4"
        name="title"
        // onChange={handleValues}
        placeholder="Title"
      />
      <input
        // value={newProduct.genre}
        type="text"
        className="m-1 col-4"
        name="genre"
        // onChange={handleValues}
        placeholder="Genre"
      />
      <input
        // value={newProduct.imageTitle}
        type="text"
        className="m-1 col-4"
        name="imageTitle"
        // onChange={handleValues}
        placeholder="Image for title"
      />
      <input
        // value={newProduct.imageDescription1}
        type="text"
        className="m-1 col-4"
        name="imageDescription1"
        // onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        // value={newProduct.imageDescription2}
        type="text"
        className="m-1 col-4"
        name="imageDescription2"
        // onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        // value={newProduct.imageDescription3}
        type="text"
        className="m-1 col-4"
        name="imageDescription3"
        // onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        // value={newProduct.description}
        type="text"
        className="m-1 col-4"
        name="description"
        // onChange={handleValues}
        placeholder="Description"
      />

      <Link to="/movies" className="btn btn-success col-4">
        <button className="btn btn-success col-4">Save</button>
      </Link>
    </div>
  );
};

export default Edit;
