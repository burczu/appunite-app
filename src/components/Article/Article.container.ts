import { get } from '@Model/article/selectors';
import _Store from '@Store';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { IArticleFromDispatch, IArticleFromState } from './Article';
import Article from './Article.component';

const mapStateToProps = (state: _Store.IState): IArticleFromState => ({
  article: get(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): IArticleFromDispatch => ({
  goBack: () => dispatch(push('/')),
});

export default connect<
  IArticleFromState,
  IArticleFromDispatch,
  any,
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps,
)(Article);
