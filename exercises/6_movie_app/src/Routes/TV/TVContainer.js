import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      const {
        data: { results: popular },
      } = await tvApi.popular();

      this.setState({
        topRated,
        airingToday,
        popular,
      });
    } catch {
      this.setState({
        error: "영화 정보를 가져오는데 실패했습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    console.log(this.state);
    const { topRated, popular, airingToday, error, loading } = this.state;

    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      ></TVPresenter>
    );
  }
}
