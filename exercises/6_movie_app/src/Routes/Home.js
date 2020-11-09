import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../api";
import Loader from "../Components/Loader";
import Section from "../Components/Section";

const Container = styled.div`
  padding: 0 10px;
`;

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const {
        data: { results: nowPlayingRes },
      } = await movieApi.nowPlaying();

      setNowPlaying(nowPlayingRes);
    };
    const fetchUpcoming = async () => {
      const {
        data: { results: upcomingRes },
      } = await movieApi.upcoming();

      setUpcoming(upcomingRes);
    };
    const fetchPopular = async () => {
      const {
        data: { results: popularRes },
      } = await movieApi.popular();

      setPopular(popularRes);
    };

    try {
      fetchNowPlaying();
      fetchUpcoming();
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
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}

      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );
};

export default Home;
