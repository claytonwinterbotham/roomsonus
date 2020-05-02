import { navigate } from 'gatsby'

export const fbDERedeemVacation = (businessdata, errors, setErrors, setLoading) => {
    const data = {
        business: businessdata.fbDE_business,
        sender: businessdata.fbDE_sender,
        destination: businessdata.fbDE_destination,
        name: businessdata.fbDE_fullname,
        email: businessdata.fbDE_email,
        message: businessdata.fbDE_message,
        //phone: businessdata.fbDE_phone
    }   

    const url = 'https://members.marketingboost.com/api/redeem-vacation/send';

    const success = function(data) {
        console.log(JSON.parse(data));
        setLoading(false)
        navigate("success/")
    }

    const error = function(){
        setLoading(false)
        setErrors(errors => {
            return {
                ...errors,
                submition: "Unable to submit. Try again later"
            }
        })
    }

    const uriData = (data) => {
        return Object.keys(data)
        .map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        })
        .join('&');
    }

    const params = typeof data === 'string' ? data : uriData(data);

    const xhr = new XMLHttpRequest()
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            success(xhr.responseText);
        }
        if (xhr.readyState === 4 && xhr.status >= 400 ) {
            error();
        }
    }
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);

    return xhr;

}
