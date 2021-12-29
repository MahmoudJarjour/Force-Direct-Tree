import { Container } from "@mui/material";
import React, { useState } from "react";
import ForceDirectedTreeJuvenile from "./charts/ForceDirectedTreeJuvenile";

export default function Layout() {
  const [entitiesContent, setEntitiesContent] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const displayContent = (obj) => {
    if (obj.content) {
      setName(obj.name || "");
      setEntitiesContent(obj.content || []);
      setImage(obj.image);
    }
  };
  return (
    <Container>
      <ForceDirectedTreeJuvenile displayContent={displayContent} />
    </Container>
  );
}
