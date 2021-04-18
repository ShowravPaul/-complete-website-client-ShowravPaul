import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminPanelMain from '../AdminPanelMain/AdminPanelMain';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const serviceData = {
            serviceName: data.name,
            imageURL: imageURL,
            aboutService: data.writer,
            price: data.price
        };

        const url = `http://localhost:5000/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c941757cd751641abd35360261ba8de8');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <AdminPanelMain></AdminPanelMain>
            <div className="addService">
                <h4>Add a new Service!</h4>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text" placeholder="Service name" ref={register} required />
                    <br />
                    <br />
                    <p>Choose an image for the book:</p>
                    <input name="image" type="file" onChange={handleImageUpload} required />
                    <br />
                    <br />
                    <input name="writer" type="text" placeholder="About Service" ref={register} required />
                    <br />
                    <br />
                    <input name="price" type="number" placeholder="Price" ref={register} required />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddService;