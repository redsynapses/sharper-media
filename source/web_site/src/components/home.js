import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import { Container, Row, Col } from 'reactstrap';
import diagram from '../img/diagram.png';

class Home extends Component {

  render() {
    return (
      <div>
        <Container>
          <Col>
              <h1 className="display-3"  align="center">Sharper Media - RedSyn AI demo</h1>
              <hr className="my-2" />
              <p className="jumbotron lead" align="center">This solution automatically analyzes, extract, index, and search on valuable metadata from an image, video, and audio files.</p>
          </Col>
          <Col>
              <h3 className="display-5">Procedure</h3>
              <hr />
                <ol>
                  <li className="lead">Upload video, audio, or image file in the 'Upload' tab</li>
                  <li className="lead">Browse for uploaded media files in the 'Browse' tab and click to view results</li>
                  <li className="lead">View and higlight labels, faces, objects, persons, celebrities, known faces, transcripts, phrases, and entities in the result page</li>
                </ol>
          </Col>
          <Col>
              <h3 className="display-5">Architecture</h3>
              <hr />
              <img src={diagram} className="img-fluid" alt="diagram"/>
              <hr />
              <div class="jumbotron">
                <h3>AI is cool, but let's talk old fashion way</h3>
                <p class="lead">Give us a call and talk to a "real" human. Ask questions or schedule a demo.</p>
                <p><a class="btn btn-primary btn-lg" href="tel:6785156283" role="button">Call (678) 515-6283</a></p>
              </div>
          </Col>
        </Container>
      </div>

    );
  }
}

export default withAuthenticator(Home);
