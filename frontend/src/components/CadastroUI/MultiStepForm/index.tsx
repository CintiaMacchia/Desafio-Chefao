import React, { useState } from 'react';
import { Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';
import { Form } from 'react-bootstrap';
import CadastroButton, { BackButton } from '../CadastroButton';
import * as S from './styles';

interface MultiStepFormProps extends FormikConfig<FormikValues> {
    hasPrevious?: boolean,
    children: React.ReactNode
}

const MultiStepForm = ({ children, initialValues, onSubmit }: MultiStepFormProps) => {
    
    const [step, setStep] = useState(0);
    const [snapshot, setSnapshot] = useState(initialValues);

    const steps = React.Children.toArray(children) as React.ReactElement[];

    const currentStep = steps[step];
    const totalSteps = steps.length;
    const isLastStep = step === totalSteps - 1;

    const next = (values: FormikValues) => {
        setSnapshot(values);
        setStep(step + 1);
    }

    const prev = (values: FormikValues) => {
        setSnapshot(values)
        setStep(step - 1);
    }

    const handleSubmit = async (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        
        if (currentStep.props.onSubmit) {
            await currentStep.props.onSubmit(values)
        }

        if(isLastStep) {
            return onSubmit(values, actions);
        } else {
            next(values);
            actions.setTouched({});
        }
    }

    return (
        <>
            <Formik 
                initialValues={snapshot}
                onSubmit={handleSubmit}
                validationSchema={currentStep.props.validationSchema}
            >
                {(formik) => ( 
                    <Form className='w-100' onSubmit={formik.handleSubmit}>
                        <S.StyledFormGroup>
                            <BackButton hasPrevious={step > 0} onBackClick={() => prev(formik.values)}/>
                        </S.StyledFormGroup>

                        {currentStep}
                        
                        <S.StyledFormGroup>
                            <CadastroButton isLastStep={isLastStep} />
                        </S.StyledFormGroup>
                    </Form>
                )}
            </Formik>
        </>
    )

}

export default MultiStepForm;

export const FormStep = ({stepName = '', children}: any) => children;