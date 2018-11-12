// @flow

import React, { PureComponent, Fragment } from "react";
import { Trans } from "react-i18next";

import SettingsRow from "../../../components/SettingsRow";
import InfoModal from "../../../components/InfoModal";

type Props = {};
type State = {
  isOpened: boolean,
};

class TechnicalDataRow extends PureComponent<Props, State> {
  state = {
    isOpened: false,
  };

  onClose = () => this.setState({ isOpened: false });
  onOpen = () => this.setState({ isOpened: true });

  render() {
    const { ...props } = this.props;
    const { isOpened } = this.state;
    return (
      <Fragment>
        <SettingsRow
          title={<Trans i18nKey="settings.display.technicalData" />}
          desc={<Trans i18nKey="settings.display.technicalDataDesc" />}
          onHelpPress={this.onOpen}
          {...props}
        />
        <InfoModal
          isOpened={isOpened}
          onClose={this.onClose}
          title={<Trans i18nKey="settings.display.technicalDataModal.title" />}
          desc={<Trans i18nKey="settings.display.technicalDataModal.desc" />}
          bullets={[
            {
              key: "bullet1",
              val: (
                <Trans i18nKey="settings.display.technicalDataModal.bullet1" />
              ),
            },
            {
              key: "bullet2",
              val: (
                <Trans i18nKey="settings.display.technicalDataModal.bullet2" />
              ),
            },
            {
              key: "bullet3",
              val: (
                <Trans i18nKey="settings.display.technicalDataModal.bullet3" />
              ),
            },
            {
              key: "bullet4",
              val: (
                <Trans i18nKey="settings.display.technicalDataModal.bullet4" />
              ),
            },
            {
              key: "bullet5",
              val: (
                <Trans i18nKey="settings.display.technicalDataModal.bullet5" />
              ),
            },
          ]}
        />
      </Fragment>
    );
  }
}

export default TechnicalDataRow;
