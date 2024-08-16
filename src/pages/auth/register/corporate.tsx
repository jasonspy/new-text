
import ContainerLayout from "../../../layouts/ContainerLayout";
import { BioData } from "../../../components/corporate/Biodata";
import { ResidentialInfo } from "../../../components/corporate/Residential";
import { DocumentUpload } from "../../../components/corporate/DocumentUpload";
import { Biometric } from "../../../components/corporate/Biometric";
import { ReviewCorporate } from "../../../components/corporate/Review";
import { ContactIndividual } from "../../../components/corporate/Contact";
import { DirectorDetails } from "../../../components/corporate/DirectorDetails";


const GetStartedCorporate = () => {

    return (
        <ContainerLayout>
            <div className="w-full">
                <BioData />
                <ResidentialInfo />
                <ContactIndividual />
                <DirectorDetails />
                <DocumentUpload />
                <Biometric />
                <ReviewCorporate />
            </div>
        </ContainerLayout>
    );
}

export default GetStartedCorporate

