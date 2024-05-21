import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Baraa's Resume.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", alignItems: "center"}}>
          <Col
            md={12}
            style={{
              position: "relative"
            }}
          >
            <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom:"20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          </Col>
          <Col
            md={6}
          >
            <img style={{ width:'350px' }} src="https://i.ibb.co/8rQLd5d/Baraa-Jadaan.jpg" alt="Baraa-Jadaan" border="0"></img>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

export default ResumeNew;
