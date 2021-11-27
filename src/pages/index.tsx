import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import styles from '../styles/Home.module.css'

export default function Home() {
  const clients = [
    new Client('Claudia', 36, '1'),
    new Client('Beto', 38, '2'),
    new Client('Oliver', 5, '3'),
    new Client('Popolo', 3, '4')
  ]

  function clientSelected(client: Client) {
    console.log(client.name)
  }
  function clientDeleted(client: Client) {
    console.log(client.name)
  }

  function saveClient(client: Client) {
    console.log(client)
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to to-blue-600
      text-white
    `}>
      <Layout title="Simple Register">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green"
                className="mb-4"
                onClick={() => setVisible('form')}>New Client</Button>
            </div>
            <Table clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted} />
          </>
        ) : (
          <Form
            client={clients[2]}
            cancelled={() => setVisible('table')}
            clientChanged={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
