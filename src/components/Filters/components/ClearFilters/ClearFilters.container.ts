import { clearFilters } from '@Model/filters/actions';
import _Store from '@Store';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { IClearFiltersFromDispatch } from './ClearFilters';
import ClearFilters from './ClearFilters.component';

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): IClearFiltersFromDispatch => ({
  clearFilters: () => dispatch(clearFilters()),
});

export default connect<null, IClearFiltersFromDispatch, any, _Store.IState>(
  null,
  mapDispatchToProps,
)(ClearFilters);
