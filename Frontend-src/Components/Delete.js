import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Delete = () => {
  const { id } = useParams();

  useEffect(() => {
    const deleteBlog = async () => {
      const res = await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) alert("Blog deleted");
      else alert(data.message || "Failed to delete");
    };
    deleteBlog();
  }, [id]);

  return <h3>Deleting blog...</h3>;
};

export default Delete;
