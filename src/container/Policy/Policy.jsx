import React, { useState } from "react";

import { policyData } from "../../constants";
import { Accordion } from "react-bootstrap";
import { Collapsibles, LinkButton } from "../../components";
import "./Policy.css";

const Policy = () => {
  return (
    <div className="policy-wrapper">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header id="header">Policies</Accordion.Header>
          <Accordion.Body>
            <ul>
              {policyData.policies.map((policy, index) => (
                <Collapsibles key={index} content={policy.description} />
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Cancellations</Accordion.Header>
          <Accordion.Body>
            <ul>
              <Collapsibles content={policyData.cancellations.description} />
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <LinkButton text="Get In Touch" link="./contacts" />
    </div>
  );
};

export default Policy;
