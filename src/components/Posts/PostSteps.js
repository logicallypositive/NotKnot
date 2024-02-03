import { useState } from "react";
import Step from "./Step";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function PostSteps({ post }) {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < post.steps.length) {
      setStep((s) => s + 1);
    }
  }
  return (
    <Box className="stepsContainer">
      <Button
        variant="contained"
        className="toggleStep"
        onClick={() => setIsOpen((is) => !is)}
      >
        Toggle Steps
      </Button>
      {isOpen && (
        <div className="steps">
          <div className="stepCounter">
            step: {step} / {post.steps.length}
          </div>
          <Step stepObj={post.steps[step - 1]} />
          <Button
            variant="contained"
            className="stepButton"
            onClick={handlePrevious}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            className="stepButton"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      )}
    </Box>
  );
}
