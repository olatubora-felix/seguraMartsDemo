import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const steps = [
  {
    label: 'ORDER PLACED',
    description: `Order recieved and is processed for delivery`,
  },
  {
    label: 'ORDER IN PROGRESS',

    description: `Order undergoing checks before dispatch`,
  },
  {
    label: 'ORDER DISPATCHED',
    description: 'Order out for delivery',
  },
  {
    label: 'ORDER DELIVERED',
    description: `Order delivered`,
  },
]

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(1)

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
  // }

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
  // }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? <Typography variant="caption">Order delivered</Typography> : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Thanks for Your Paronage</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}
