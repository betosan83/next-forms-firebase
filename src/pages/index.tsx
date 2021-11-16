import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to to-blue-600
      text-white
    `}>
        <Layout title="Simple Register">
          <span>Content</span>
        </Layout>
    </div>
  )
}
