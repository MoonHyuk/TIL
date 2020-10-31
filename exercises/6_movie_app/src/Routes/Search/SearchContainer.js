import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    airingToday: null,
    error: null,
    loading: false,
  };

  render() {
    const { movieResults, tvResults, airingToday, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        airingToday={airingToday}
        error={error}
        loading={loading}
      ></SearchPresenter>
    );
  }
}
