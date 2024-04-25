import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './mini_project/component/page/MainPage';
import PostWritePage from "./mini_project/component/page/PostWritePage";
import PostViewPage from "./mini_project/component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size : 24px;
  font-weight : bold;
  text-align : center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/post-write" element={<PostWritePage/>} />
        <Route path="/post/:postId" element={<PostViewPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
