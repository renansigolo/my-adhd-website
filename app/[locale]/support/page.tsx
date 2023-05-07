"use client"

import { ContainerSection } from "@/components/layout/Containers"
import { Footer } from "@/components/layout/Footer"
import { HeaderPage } from "@/components/layout/Headers"
import { Navbar } from "@/components/layout/Navbar"

export default async function Support() {
  return (
    <>
      <Navbar />

      <SupportHeader />

      {/* <Faq /> */}

      <Footer />
    </>
  )
}

const SupportHeader = () => {
  return (
    <ContainerSection center>
      <HeaderPage
        id="support"
        subTitle="How can we help you?"
        title="Support"
      />
    </ContainerSection>
  )
}
