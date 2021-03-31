import { Container, DropdownArea, Title } from "./styles";

export const Uploader: React.FC = () => {
    return (
        <Container>
            <Title>
                <span>Upload your Files</span>
                <small>File should be Zip, EPS, AVI</small>
            </Title>

            <DropdownArea></DropdownArea>
        </Container>
    );
};