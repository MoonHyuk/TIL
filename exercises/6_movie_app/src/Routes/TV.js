import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tvApi } from "../api";
import Loader from "../Components/Loader";
import Section from "../Components/Section";

const Container = styled.div`
  padding: 0 10px;
`;

const TV = () => {
  const [topRated, setTopRated] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [popular, setPopular] = useState([]);
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopRated = async () => {
      const {
        data: { results: topRatedRes },
      } = await tvApi.topRated();

      setTopRated(topRatedRes);
    };
    const fetchAiringToday = async () => {
      const {
        data: { results: airingTodayRes },
      } = await tvApi.airingToday();

      setAiringToday(airingTodayRes);
    };
    const fetchPopular = async () => {
      const {
        data: { results: popularRes },
      } = await tvApi.popular();

      setPopular(popularRes);
    };

    try {
      fetchTopRated();
      fetchAiringToday();
      fetchPopular();
    } catch (e) {
      console.log(e);
      setError("영화 정보를 가져오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular shows">
          {popular.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );
};

export default TV;
