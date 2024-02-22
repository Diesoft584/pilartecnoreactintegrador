import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/places/'

const Create = () => {
    const [areas, setAreas] = useState('');
    const [name, setName] = useState('');
    const [latitud, setLatitud] = useState('');
    const [length, setLength] = useState('');
    const [map, setMap] = useState('');
    const [description, setDescription] = useState('');
    const [attentionHours, setAttentionHours] = useState('');
    const [image, setImage] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactMail, setContactMail] = useState('');
    const [contactRedSocial, setContactRedSocial] = useState('');
    const [contactPage, setContactPage] = useState('');

    const navigate = useNavigate();

    // Procedimiento guardar
    const store = async (e) => {
        e.preventDefault();

        await axios.post(URI, {
            areas,
            name,
            address: {
                latitud,
                length,
                map
            },
            description,
            attention_hours: attentionHours,
            image,
            contact: {
                contact_phone: contactPhone,
                contact_mail: contactMail,
                contact_red_social: contactRedSocial,
                contact_page: contactPage
            }
        });

        navigate('/');
    }
    return (
        <div>
            <h3>Create Place</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Areas</label>
                    <input
                        value={areas}
                        onChange={(e) => setAreas(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Latitud</label>
                    <input
                        value={latitud}
                        onChange={(e) => setLatitud(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Length</label>
                    <input
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Map</label>
                    <input
                        value={map}
                        onChange={(e) => setMap(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Attention Hours</label>
                    <input
                        value={attentionHours}
                        onChange={(e) => setAttentionHours(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Phone</label>
                    <input
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Mail</label>
                    <input
                        value={contactMail}
                        onChange={(e) => setContactMail(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Red Social</label>
                    <input
                        value={contactRedSocial}
                        onChange={(e) => setContactRedSocial(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Page</label>
                    <input
                        value={contactPage}
                        onChange={(e) => setContactPage(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type='submit' className="btn btn-primary">Store</button>
            </form>
        </div>
    );
};

export default Create;