import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ClientCollection from '../backend/db/ClientCollection'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import ClientRepository from '../core/ClientRepository'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clientRepo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(findAll, [])

  function findAll() {
    clientRepo.findAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function clientDeleted(client: Client) {
    await clientRepo.delete(client)
    findAll()
  }

  async function saveClient(client: Client) {
    await clientRepo.save(client)
    findAll()
  }
  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }


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
                onClick={() => newClient()}>New Client</Button>
            </div>
            <Table clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted} />
          </>
        ) : (
          <Form
            client={client}
            cancelled={() => setVisible('table')}
            clientChanged={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
