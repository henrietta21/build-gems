import React, { useState } from "react";
import { Card, Button, Collapse, Form, Row, Col } from "react-bootstrap";
import Buttons from "./Buttons/Buttons";
import UpArrow from "../assets/images/Vector2.png";
import DownArrow from "../assets/images/Vector3.png";

const Filter = () => {
  const [openSchool, setOpenSchool] = useState(true);
  const [openExperience, setOpenExperience] = useState(false);
  const [openRole, setOpenRole] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  return (
    <div className="filter-component col-md-3">
      <Card>
        <Card.Body>
          <h5
            style={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "24px",
            }}
          >
            FILTER BY
          </h5>
          <div
            className="d-flex flex-column align-items-start "
            style={{
              color: "#101828",
            }}
          >
            <div
              className="d-flex flex-row align-items-center justify-content-between mb-3 w-100"
              onClick={() => setOpenSchool(!openSchool)}
              style={{
                cursor: "pointer",
              }}
            >
              <h5
                aria-controls="school-collapse"
                aria-expanded={openSchool}
                className="text-left px-0 mb-0"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#101828",
                }}
              >
                School
              </h5>
              <img
                src={`${openSchool ? `${UpArrow}` : `${DownArrow}`}`}
                alt="collapse-arrow"
              />
            </div>
            <Collapse in={openSchool}>
              <div id="school-collapse">
                <Form>
                  {["Unilag", "OAU", "CU", "Unilorin", "LASU"].map(
                    (school, index) => (
                      <div>
                        <Form.Check
                          type="checkbox"
                          className="mb-4"
                          id={`school-${index}`}
                          label={`${school} (${[90, 6, 70, 70, 70][index]})`}
                          key={index}
                        />
                      </div>
                    )
                  )}
                </Form>
              </div>
            </Collapse>

            {/* Years of Experience Filter */}
            <div
              className="d-flex flex-row align-items-center justify-content-between mb-3 w-100"
              onClick={() => setOpenExperience(!openExperience)}
              style={{
                cursor: "pointer",
              }}
            >
              <h5
                aria-controls="experience-collapsee"
                aria-expanded={openExperience}
                className="text-left px-0 mb-0"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#101828",
                }}
              >
                Years of experience
              </h5>
              <img
                src={`${openExperience ? `${UpArrow}` : `${DownArrow}`}`}
                alt="collapse-arrow"
              />
            </div>

            <Collapse in={openExperience}>
              <div id="experience-collapse">
                <Form>
                  {[2, 7].map((years, index) => (
                    <Form.Check
                      type="checkbox"
                      id={`experience-${index}`}
                      label={`${years} (${70})`}
                      key={index}
                    />
                  ))}
                </Form>
              </div>
            </Collapse>

            {/* Role Filter */}
            <div
              className="d-flex flex-row align-items-center justify-content-between mb-3 w-100"
              onClick={() => setOpenRole(!openRole)}
              style={{
                cursor: "pointer",
              }}
            >
              <h5
                aria-controls="role-collapse"
                aria-expanded={openRole}
                className="text-left px-0 mb-0"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#101828",
                }}
              >
                Role
              </h5>
              <img
                src={`${openRole ? `${UpArrow}` : `${DownArrow}`}`}
                alt="collapse-arrow"
              />
            </div>

            <Collapse in={openRole}>
              <div id="role-collapse">
                <Form>
                  {/* Add Role options here */}
                  <Form.Check type="checkbox" label="Role 1" />
                  <Form.Check type="checkbox" label="Role 2" />
                </Form>
              </div>
            </Collapse>

            {/* Location Filter */}
            <div
              className="d-flex flex-row align-items-center justify-content-between mb-3 w-100"
              onClick={() => setOpenLocation(!openLocation)}
              style={{
                cursor: "pointer",
              }}
            >
              <h5
                aria-controls="location-collaps"
                aria-expanded={openLocation}
                className="text-left px-0 mb-0"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#101828",
                }}
              >
                Location
              </h5>
              <img
                src={`${openLocation ? `${UpArrow}` : `${DownArrow}`}`}
                alt="collapse-arrow"
              />
            </div>

            <Collapse in={openLocation}>
              <div id="location-collapse">
                <Form>
                  {/* Add Location options here */}
                  <Form.Check type="checkbox" label="Location 1" />
                  <Form.Check type="checkbox" label="Location 2" />
                </Form>
              </div>
            </Collapse>
          </div>

          {/* School Filter */}

          {/* Apply and Clear Buttons */}
          <Row className="mt-3">
            <Col>
              <Button className="w-100  btn-accent-1">Apply filter</Button>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Button className="w-100 btn-accent-2">Clear all</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Filter;
