import React, {FC, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestsApi} from './requests-api';

const Request: FC = () => {
    const [state, setState] = useState<any>(null)
    const [success, setSuccess] = useState<boolean>(false)
    const addPost = () => {
        requestsApi.requestPost(success)
            .then((res) => {
                setState(res.data);
            })
            .catch((error) => {
                setState(error);
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <SuperCheckbox onChange={(e) => {
                setSuccess(e.currentTarget.checked)
            }}/>
            <SuperButton onClick={addPost}>Add</SuperButton>
        </div>
    </div>
}


export default Request;