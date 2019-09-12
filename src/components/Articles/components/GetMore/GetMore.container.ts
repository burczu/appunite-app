import { getMore } from '@Model/articles/actions';
import _Store from '@Store';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { IGetMoreFromDispatch } from './GetMore';
import GetMore from './GetMore.component';

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): IGetMoreFromDispatch => ({
  getMore: () => dispatch(getMore()),
});

export default connect<null, IGetMoreFromDispatch, any, _Store.IState>(
  null,
  mapDispatchToProps,
)(GetMore);
