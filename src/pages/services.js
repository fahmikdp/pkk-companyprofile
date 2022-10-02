import React from "react";
import Layout from "@/layouts";
import { Header } from "@/components";

export default function Services() {
  const logo = ["nodejs.png", "htmlcssjs.png", "mariadb.png", "sql.png"];

  return (
    <Layout>
      <section className="min-h-screen">
        <div className="hero min-h-screen bg-[url(/webapp.jpg)] bg-fixed">
          <div className="hero-overlay bg-opacity-80 backdrop-blur"></div>
          <div className="container flex justify-center ">
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">
                  Web Based Application
                </h1>
                <p className="mb-5">
                  Web-based applications or commonly called Web Applications
                  have several advantages including not requiring computer
                  qualifications and not requiring installation. To open it not
                  only on certain computers like desktop applications. If a
                  desktop application, to run the program requires an
                  installation process (installation) first, then it is
                  different from the case with web applications that do not
                  require installation process. All you need is an adequate
                  internet connection.
                </p>

                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 xl:px-14 md:px-4 sm:px-4 container">
        <div className="xl:px-12">
          {/* <Header title="Our Services" /> */}
          <p className="text-center my-10 md:text-lg">
            We accept Web Application creation services (special web-based
            applications) for specific task needs with features needed. The
            process of creating a web application will be developed using{" "}
            <b>PHP programming with MySQL or SQL Server databases</b> supported
            by interesting settings and designs. Data collection, analysis, and
            implementation will be carried out by involving clients / sections
            that are competent with functional applications so that the
            application will be optimized and validated.
          </p>
        </div>
        <Header title="Software Application" />
        <div className="flex justify-center  gap-6 flex-wrap mt-16">
          {logo.map((l, index) => (
            <img src={l} key={index} alt="logo" className=" h-[100px] rounded-md" />
          ))}
        </div>
      </section>
    </Layout>
  );
}
