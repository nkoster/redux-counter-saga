import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './dataSlice';

async function fetchDataFromApi(query) {
    console.log('QUERY', query)
  const response = await fetch(`https://api.github.com/users/${query}`);
  if (!response.ok) {
    console.log('ERROR', response.status);
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

function* fetchData(action) {
    console.log('fetchData action', action);
  try {
    const data = yield call(fetchDataFromApi, action.payload);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeEvery('data/fetchData', fetchData);
}
