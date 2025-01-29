import { useState, useEffect } from 'react';
import { callerService } from '@/_services/caller.service';
import Card from './Card';
import './gallery.css';

const Gallery = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        callerService.getAllProperties()
            .then((res) => {
                setProperties(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des propriétés :", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="gallery-loading">Chargement...</div>;
    }

    return (
        <div className="gallery-content">
            {properties.map((dataAllProperties) => (
                <Card
                    key={dataAllProperties.id}
                    id={dataAllProperties.id}
                    title={dataAllProperties.title}
                    cover={dataAllProperties.pictures && dataAllProperties.pictures[0]} // Affiche la première image si disponible
                />
            ))}
        </div>
    );
};

export default Gallery;