import React from "react";
import AudioSpectrum from "react-audio-spectrum";
import { Container } from "react-bootstrap";

export default function Visualizer({ song, ref }) {
  return (
    <Container>
      <div>
        <audio id="audio-element" src={song.src} autoPlay></audio>
        <AudioSpectrum
          id="audio-canvas"
          height={200}
          width={300}
          audioId={"audio-element"}
          capColor={"red"}
          capHeight={2}
          meterWidth={2}
          meterCount={512}
          meterColor={[
            { stop: 0, color: "#f00" },
            { stop: 0.5, color: "#0CD7FD" },
            { stop: 1, color: "red" },
          ]}
          gap={4}
        />
      </div>
    </Container>
  );
}
