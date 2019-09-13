import { getArticlesWithSourceUrl } from '@Model/articles/selectors';
import { isAnyError, isAnyLoading } from '@Model/state/selectors';
import _Store from '@Store';
import { connect } from 'react-redux';
import { IArticlesFromState } from './Articles';
import DateDropDown from './Articles.component';

const mapStateToProps = (state: _Store.IState): IArticlesFromState => ({
  articles: getArticlesWithSourceUrl(state),
  isError: isAnyError(state),
  isLoading: isAnyLoading(state),
});

export default connect<IArticlesFromState, null, any, _Store.IState>(
  mapStateToProps,
  null,
)(DateDropDown);
