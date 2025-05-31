import React from 'react';
import { Form } from 'react-final-form';
import createDecorator from 'final-form-focus';
import createSubmitListenerDecorator from 'final-form-submit-listener';
import arrayMutators from 'final-form-arrays'

const submitListener = ({ beforeSubmit, afterSubmitSucceeded, afterSubmitFailed }) => createSubmitListenerDecorator({
    beforeSubmit,
    afterSubmitSucceeded,
    afterSubmitFailed,
});

const focusOnErrors = createDecorator();

const FinalForm = ({
    render,
    beforeSubmit = () => { },
    afterSubmitSucceeded = () => { },
    afterSubmitFailed = () => { },
}) => {
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <Form
                onSubmit={onSubmit}
                decorators={[focusOnErrors, submitListener({ beforeSubmit, afterSubmitSucceeded, afterSubmitFailed })]}
                mutators={{ ...arrayMutators }}
                render={({ handleSubmit, values, invalid, dirty, form }) => (
                    <form onSubmit={handleSubmit}>
                        {render && render({ handleSubmit, onSubmit, values, invalid, dirty, form })}
                    </form>
                )}
            />
        </>
    )
}

export default FinalForm;