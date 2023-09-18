import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Identity Architect</title>
          <meta
            property="og:title"
            content="test-page - Future Identity Architect"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_pclm4o) => (
            <>
              <h1>{context_pclm4o?.Name}</h1>
            </>
          )}
          initialData={props.contextPclm4oProp}
          persistDataDuringLoading={true}
          key={props?.contextPclm4oProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextPclm4oProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextPclm4oProp: contextPclm4oProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
