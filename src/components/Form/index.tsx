import React, { useState } from 'react';
import { navigate } from 'gatsby';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { ModalForm, ErrorMessage, SubmitButton } from './Form.style'
import Loader from 'react-loader-spinner'
import ReCAPTCHA from "react-google-recaptcha"
import { fbDERedeemVacation } from '../../lib/MarketingBoostAPI'

type FormProps = {
    destination: any
} 

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors: any, formValues: any) => {
    let valid = true

    Object.values(formValues).forEach((val: any) => {
        if(val.length === 0){
            console.log('form not submitted due to empty inputs')
            valid = false
        }
    })

    Object.values(errors).forEach((val: any) => {
        if(val.length > 0){
            console.log('form not submitted due to form errors')
            valid = false
        }
    })
    return valid
}

export const Form: React.FunctionComponent<FormProps> = ({
    destination
}) => {

    const [destinationID, setDestinationID] = useState(destination.id)
    const [loading, setLoading] = useState(false)

    // only field you want to validate as required
    const [validValues, setValidateValues] = useState({
        fullName: '',
        email: '',
        //phone: ''
    })
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        //phone: '',
        submition: ''
    })

    const recaptchaRef: any = React.createRef()

    const handleChange = (event: any) => {
        event.preventDefault()
        const { name, value } = event.target

        const newErrors = errors
        const newValues = validValues
 
        switch (name) {
            case 'fullName':
                newValues.fullName = value
                newErrors.fullName = 
                    value.length < 5
                    ? 'Full Name must be at least 5 characters long.' : ''
                break
            case 'email':
                newValues.email = value
                newErrors.email = validEmailRegex.test(value) ? '' : 'Email is not valid.'
               
                break
            // case 'phone':
            //     newValues.phone = value
            //     newErrors.phone = 
            //         value.length < 5
            //         ? 'Phone Number be at least 5 characters long.' : ''
            //     break
            default:
                break
        }

        setErrors(errors => {
            return {
                ...errors,
                ...newErrors
            }
        })

        setValidateValues(validValues => {
            return {
                ...validValues,
                ...newValues
            }
        })
    }


    const handleSubmit = (event: any) => {
        event.preventDefault()

        if(!validValues.fullName){
            setErrors(errors => {
                return {
                    ...errors,
                    fullName: "Full Name is Required"
                }
            })
        }

        if(validValues.email === ''){
            setErrors(errors => {
                return {
                    ...errors,
                    email: "Email is Required"
                }
            })
        }



        if(validateForm(errors, validValues)){
            recaptchaRef.current.execute()
            setLoading(true)
            console.info('Valid Form')
        }else{
            console.error('Invalid Form')
        }
        
       
        
        
    }

    //console.log('fullname', fullName)
    const onResolved = (value: any) => {
        if(value){

            const fdDE_detail = {
                "fbDE_sender": '12315-13978',
                "fbDE_fullname": `${validValues.fullName}`,
                "fbDE_email": `${validValues.email}`,
                "fbDE_destination": destinationID,
                "fbDE_business": 16244,
                "fbDE_message": 'test',
                //"fbDE_phone": 7785525741
            }
            console.log("fdDE",fdDE_detail)
            fbDERedeemVacation(fdDE_detail, errors, setErrors, setLoading)
            navigate("success/")
        }
    }

    const handleError = () => {
        setLoading(false)
        setErrors(errors => {
            return {
                ...errors,
                submition: "Unable to submit. Try again later"
            }
        })
    }
    
    
    return (
        <ModalForm 
            onSubmit={handleSubmit}

        >
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input 
                    type="text" 
                    name="fullName"
                    value={validValues.fullName} 
                    onChange={
                        handleChange
                    } 
                    placeholder="Please enter full name" 
                />
            {errors && <ErrorMessage>{errors.fullName}</ErrorMessage>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={validValues.email}
                    onChange={
                        handleChange    
                    } 
                    placeholder="Please enter email" 
                />
            {errors && <ErrorMessage>{errors.email}</ErrorMessage>}
            </div>
            {/* <div>
                <label htmlFor="phone">Phone Number:</label>
                <input 
                    type="phone" 
                    name="phone"
                    value={validValues.phone}
                    onChange={
                        handleChange
                    } 
                    placeholder="Please enter phone number" 
                />
            </div> */}
            {errors && <ErrorMessage>{errors.submition}</ErrorMessage>}
            <div>
                <SubmitButton onClick={handleSubmit} type="submit" value="Submit">
                    {loading ? <Loader type="ThreeDots" height={25} width={25} /> : "Submit"}
                </SubmitButton>
            </div>
            <ReCAPTCHA 
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LfXlu4UAAAAAPVG3ss2ws3CBopFzuVm9DtOtQiJ"
                onChange={onResolved}
                onErrored={handleError}
            />
        </ModalForm>
    )
}