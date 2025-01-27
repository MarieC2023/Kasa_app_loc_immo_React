import PropTypes from "prop-types";
import Carrousel from "@/components/PropertyPageComponents/components/Carrousel";
import PropertyDetails from "@/components/PropertyPageComponents/PropertyDetails";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { callerService } from '@/_services/caller.service';
import Error from "@/_utils/Error";

const PropertyPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const initDetails = useCallback(async () => {
    try {
      const details = await callerService.getProperty(id);
      if (details) {
        setData(details);
      }
    } catch (error) {
      console.error("Données introuvables: ", error);
    } finally {
      setLoading(false);
    }
  }, [id]); 

  useEffect(() => {
    initDetails();
  }, [initDetails]); 

  if (loading) {
    return <p className="gallery-loading">Chargement...</p>;
  }

  if (!data) {
    return <Error />;
  }

  return (
    <main className="main-content">
      <Carrousel pictures={data.pictures} />
      <PropertyDetails
        title={data.title}
        location={data.location}
        name={data.host?.name}
        tags={data.tags}
        rating={data.rating}
        picture={data.host?.picture}
        description={data.description}
        equipments={data.equipments}
      />
    </main>
  );
};

PropertyPage.propTypes = {
  id: PropTypes.string.isRequired, 
};

export default PropertyPage;
