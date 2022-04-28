/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'
import Image from 'next/image'
import LagrangeMobileLogo from '../public/Lagrange-logo-light.png'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import Component4 from '../components/Component4'
import Component5 from '../components/Component5'
import Component6 from '../components/Component6'
const Index: NextPage = (props) => {
  const [isExpanded, toggleExpansion] = useState(true)

  return (
    <>
      <Head>
        <title>Lagrange - Home</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
      </Head>
      <div className="Index">
        <nav>
          <img
            src="https://i.ibb.co/Pr5pF0M/Lagrange-logo-light.png"
            alt="logo==="
          />

          <figure>
            <div className="child2">
              <a
                href="https://www.youtube.com/watch?v=7Pa9LKa_IQM"
                target="_blank"
                rel="noreferrer"
              >
                Pitch Video
              </a>
            </div>
          </figure>
        </nav>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
      </div>
    </>
  )
}

export default Index
