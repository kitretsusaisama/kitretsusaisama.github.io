import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../resources/templates/injected_head/header';
import Topheader from '..//resources/templates/injected_head/topheader';
import Search from "../resources/templates/injected_head/search";
import Blog from "../resources/sections/blogs";
import Footer from "../resources/templates/footer/indoor";

const Home: NextPage = () => {
  return (
	<>
	<Search />
	<Header />
	<Topheader />
	<Blog />
  <Footer />
	</>
  );
}

export default Home
