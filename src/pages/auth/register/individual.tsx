
import ContainerLayout from "../../../layouts/ContainerLayout";
import { BioData } from "../../../components/Individual/Biodata";
import { ResidentialInfo } from "../../../components/Individual/Residential";
import { DocumentUpload } from "../../../components/Individual/DocumentUpload";
import { Biometric } from "../../../components/Individual/Biometric";
import { ReviewIndividual } from "../../../components/Individual/Review";


const GetStarted = () => {

    return (
        <ContainerLayout>
            <div className="w-full">
                <BioData />
                <ResidentialInfo />
                <DocumentUpload />
                <Biometric />
                <ReviewIndividual />
            </div>
        </ContainerLayout>
    );
}

export default GetStarted

