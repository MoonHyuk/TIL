import React from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      push("/");
      return;
    }

    const isMovie = pathname.includes("/movie/");

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.showDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({
        error: "정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
        result: result,
      });
    }
  }
  render() {
    const { result, error, loading } = this.state;

    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      ></DetailPresenter>
    );
  }
}
