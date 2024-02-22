import React, { useState, useEffect } from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/places/'

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlaces();
    }, []);

    // Procedimiento para mostrar todos los Places
    const getPlaces = async () => {
        const res = await axios.get(URI);
        setPlaces(res.data);
    };

    // Procedimiento para eliminar un lugar
    const deletePlace = async (id) => {
        await axios.delete(`${URI}${id}`);
        getPlaces();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/create" className="btn btn-primary mt-2 mb-2">
                        <i className="fa-solid fa-plus"></i> Create Place
                    </Link>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Areas</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Attention Hours</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Contact</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {places.map((place, index) => (
                                <TableRow key={index}>
                                    <TableCell>{place.areas}</TableCell>
                                    <TableCell>{place.name}</TableCell>
                                    <TableCell>
                                        {`${place.address.latitud}, ${place.address.length}, ${place.address.map}`}
                                    </TableCell>
                                    <TableCell>{place.description}</TableCell>
                                    <TableCell>{place.attention_hours}</TableCell>
                                    <TableCell>{place.image}</TableCell>
                                    <TableCell>
                                        {place.contact && (
                                            <>
                                                <div>Phone: {place.contact.contact_phone}</div>
                                                <div>Mail: {place.contact.contact_mail}</div>
                                                <div>Social: {place.contact.contact_red_social}</div>
                                                <div>Page: {place.contact.contact_page}</div>
                                            </>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/edit/${place._id}`} className="btn btn-info">
                                            <i className="fa-solid fa-pen-to-square"></i> Edit
                                        </Link>
                                        <Button onClick={() => deletePlace(place._id)} variant="contained" color="error">
                                            <i className="fa-solid fa-trash"></i> Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};
export default Places;