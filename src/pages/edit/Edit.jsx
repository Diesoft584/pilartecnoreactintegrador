import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/places/';

const Edit = () => {
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
    const { id } = useParams();

    // Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();
        await axios.patch(URI + id, {
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
    };

    useEffect(() => {
        const getPlaceById = async () => {
            try {
                const res = await axios.get(URI + id);
                const placeData = res.data;
                setAreas(placeData.areas);
                setName(placeData.name);
                setLatitud(placeData.address.latitud);
                setLength(placeData.address.length);
                setMap(placeData.address.map);
                setDescription(placeData.description);
                setAttentionHours(placeData.attention_hours);
                setImage(placeData.image);
                setContactPhone(placeData.contact.contact_phone);
                setContactMail(placeData.contact.contact_mail);
                setContactRedSocial(placeData.contact.contact_red_social);
                setContactPage(placeData.contact.contact_page);
            } catch (error) {
                console.error(`Error fetching place with ID ${id}:`, error);
            }
        };
        getPlaceById();
    }, [id]);

    return (
        <div>
            <h3>Edit Place</h3>
            <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
};

export default Edit;