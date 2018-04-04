import React, { Component } from 'react';
import PageNotFound from '../error/PageNotFound';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
import IconStepContainer from './iconstep/IconStepContainer';

class EtcRouter extends Component {
	render() {
		return (
			<QuerySwitch {...this.props} queryname="pagename">
				<QueryRoute component={IconStepContainer} />
				<QueryRoute path="etc/iconstep" exact component={IconStepContainer} />
				<QueryRoute nomatch component={PageNotFound} />
			</QuerySwitch>
		);
	}
}

export default EtcRouter;