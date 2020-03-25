import React from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Daily,
  DailyData,
  Diagnosis,
  Home,
  HowItWorks,
  RiskTest,
  RiskInformation,
  Numbers,
  PrivacyPolicy,
  PrivacyPolicyDetails,
  Registration,
  Regulations,
  RiskTestData,
  UserData,
  UserDataSettings
} from '../../views';

import { Menu } from '../Menu';
import './App.scss';
import useMenuContext from '../../hooks/useMenuContext';

function App() {
  moment.locale('pl');

  const { name } = useSelector(state => state.user);
  const { inProgress, visible } = useMenuContext();
  const menuVisible = visible && !inProgress ? 'menu-visible' : '';

  return (
    <div className={`app ${menuVisible}`}>
      <div className="app__inner">
        <Switch>
          <Route exact path="/" component={name ? Home : Registration} />
          {name && (
            <>
              <Route exact path="/daily" component={Daily} />
              <Route exact path="/daily/:id" component={DailyData} />
              <Route exact path="/daily-data" component={DailyData} />
              <Route exact path="/how-it-works" component={HowItWorks} />
              <Route exact path="/risk-test" component={RiskTest} />
              <Route exact path="/risk-test-data/:id" component={RiskTestData} />
              <Route exact path="/risk-information" component={RiskInformation} />
              <Route exact path="/numbers" component={Numbers} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route
                exact
                path="/privacy-policy-details"
                component={PrivacyPolicyDetails}
              />
              <Route exact path="/regulations" component={Regulations} />
              <Route exact path="/diagnosis" component={Diagnosis} />
              <Route exact path="/user-data" component={UserData} />
              <Route exact path="/user-data/settings" component={UserDataSettings} />
            </>
          )}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Menu />
      </div>
    </div>
  );
}

export default App;
