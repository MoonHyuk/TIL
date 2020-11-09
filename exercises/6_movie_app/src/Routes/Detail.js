import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../api";
import Loader from "../Components/Loader";

const Detail = ({
  match: {
    params: { id },
  },
  history: { push },
  location: { pathname },
}) => {
  const [result, setResult] = useState({});
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async (id) => {
      const { data: result } = await movieApi.showDetail(id);
      setResult(result);
    };

    const fetchShowDetail = async (id) => {
      const { data: result } = await tvApi.showDetail(id);
      setResult(result);
    };
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      push("/");
      return;
    }
    const isMovie = pathname.includes("/movie/");

    try {
      if (isMovie) {
        fetchMovieDetail(parsedId);
      } else {
        fetchShowDetail(parsedId);
      }
    } catch {
      setError("정보를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  }, [id, push, pathname]);

  return loading ? <Loader></Loader> : <div></div>;
};

export default Detail;
