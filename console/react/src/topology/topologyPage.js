/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

import React, { Component } from "react";
import { PageSection, PageSectionVariants } from "@patternfly/react-core";
import TopologyViewer from "./topologyViewer";

class TopologyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: new Date()
    };
  }

  render() {
    return (
      <PageSection
        data-testid="topology-page"
        variant={PageSectionVariants.light}
        id="topologyPage"
      >
        <TopologyViewer service={this.props.service} />
      </PageSection>
    );
  }
}

export default TopologyPage;
